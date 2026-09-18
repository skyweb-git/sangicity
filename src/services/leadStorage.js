// Lead Storage Service with localStorage and BroadcastChannel Sync

const STORAGE_KEY = 'maytri_realestate_leads_db_v1';
const CHANNEL_NAME = 'maytri_leads_sync_channel';

export const getApiBaseUrl = () => {
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:5000/api';
  }
  const envUrl = (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) || 
                 (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL);
  if (envUrl) {
    const clean = envUrl.replace(/\/+$/, '');
    return clean.endsWith('/api') ? clean : `${clean}/api`;
  }
  return 'https://api.sanghicity.in/api';
};

export const API_BASE_URL = getApiBaseUrl();

const INITIAL_SAMPLE_LEADS = [];

// Initialize Broadcast Channel for cross-tab communication
let broadcastChannel = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
  }
} catch (err) {
  console.warn('BroadcastChannel not supported', err);
}

const MOCK_NAMES = [
  "Rajesh Kumar Verma",
  "Dr. Snigdha Reddy",
  "Venkata Satyanarayana",
  "Ananya & Rohit Sharma",
  "K. S. Rao"
];

function isMockLead(lead) {
  if (!lead) return false;
  if (['lead-1001', 'lead-1002', 'lead-1003', 'lead-1004', 'lead-1005'].includes(lead.id)) return true;
  if (MOCK_NAMES.includes(lead.fullName)) return true;
  if (['+91 98490 12345', '+91 98855 67890', '+91 94401 88990', '+91 97000 45612', '+91 99890 22334'].includes(lead.phone)) return true;
  return false;
}

export function getLeads() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const filtered = parsed.filter(l => !isMockLead(l));
      if (filtered.length !== parsed.length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      }
      return filtered;
    }
    return [];
  } catch (e) {
    console.error('Failed to load leads from localStorage', e);
    return [];
  }
}

export function saveLead(leadInput) {
  const currentLeads = getLeads();
  const newLead = {
    id: 'lead-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    fullName: leadInput.fullName || 'Anonymous Prospect',
    phone: leadInput.phone || '',
    email: leadInput.email || '',
    preferredMethod: leadInput.preferredMethod || 'Phone',
    source: leadInput.source || 'Website Enquiry',
    message: leadInput.message || '',
    status: leadInput.status || 'New',
    unitInterest: leadInput.unitInterest || 'Villa Enquiry',
    budget: leadInput.budget || '₹3.8 Cr - ₹5.5 Cr',
    createdAt: new Date().toISOString(),
    notes: leadInput.notes || 'Submitted via landing page.',
    followUpDate: new Date().toISOString().split('T')[0],
  };

  const updatedLeads = [newLead, ...currentLeads];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'LEADS_UPDATED', leads: updatedLeads, newLead });
    }
  } catch (e) {
    console.error('Error saving lead to local storage', e);
  }

  // Asynchronously sync with MongoDB backend API
  try {
    fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLead)
    }).then(res => res.json()).then(data => {
      console.log('✅ Lead synced to MongoDB Cloud:', data);
    }).catch(err => {
      console.warn('⚠️ MongoDB server sync offline, saved locally:', err.message);
    });
  } catch (err) {
    // Graceful offline fallback
  }

  return newLead;
}

export function updateLead(leadId, updates) {
  const currentLeads = getLeads();
  const updatedLeads = currentLeads.map(lead => {
    if (lead.id === leadId) {
      return { ...lead, ...updates, updatedAt: new Date().toISOString() };
    }
    return lead;
  });

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'LEADS_UPDATED', leads: updatedLeads });
    }
  } catch (e) {
    console.error('Error updating lead in storage', e);
  }

  return updatedLeads;
}

export function deleteLead(leadId) {
  const currentLeads = getLeads();
  const updatedLeads = currentLeads.filter(lead => lead.id !== leadId);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'LEADS_UPDATED', leads: updatedLeads });
    }
  } catch (e) {
    console.error('Error deleting lead', e);
  }
  return updatedLeads;
}

export function subscribeToLeads(callback) {
  if (typeof window === 'undefined') return () => {};

  const handleBroadcast = (event) => {
    if (event.data && event.data.type === 'LEADS_UPDATED') {
      callback(event.data.leads || getLeads());
    }
  };

  const handleStorageEvent = (event) => {
    if (event.key === STORAGE_KEY) {
      callback(getLeads());
    }
  };

  if (broadcastChannel) {
    broadcastChannel.addEventListener('message', handleBroadcast);
  }
  window.addEventListener('storage', handleStorageEvent);

  return () => {
    if (broadcastChannel) {
      broadcastChannel.removeEventListener('message', handleBroadcast);
    }
    window.removeEventListener('storage', handleStorageEvent);
  };
}

export function exportLeadsToCSV(leads) {
  if (!leads || !leads.length) return;
  const headers = ['Lead ID', 'Full Name', 'Phone', 'Email', 'Preferred Contact', 'Status', 'Unit Interest', 'Source', 'Submission Date', 'Follow Up', 'Message', 'Notes'];
  const rows = leads.map(l => [
    `"${l.id}"`,
    `"${(l.fullName || '').replace(/"/g, '""')}"`,
    `"${(l.phone || '').replace(/"/g, '""')}"`,
    `"${(l.email || '').replace(/"/g, '""')}"`,
    `"${(l.preferredMethod || '').replace(/"/g, '""')}"`,
    `"${(l.status || '').replace(/"/g, '""')}"`,
    `"${(l.unitInterest || '').replace(/"/g, '""')}"`,
    `"${(l.source || '').replace(/"/g, '""')}"`,
    `"${new Date(l.createdAt).toLocaleString()}"`,
    `"${l.followUpDate || ''}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`,
    `"${(l.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `maytri_leads_export_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
