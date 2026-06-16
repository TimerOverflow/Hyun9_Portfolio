import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../lib/firebase';

const VisitorLogsModal = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const logsRef = ref(db, 'visitor_logs');
      
      const unsubscribe = onValue(logsRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const logsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          })).sort((a, b) => (b.order || 0) - (a.order || 0));
          setLogs(logsArray);
        } else {
          setLogs([]);
        }
        setLoading(false);
      }, (error) => {
        console.error("Error fetching logs:", error);
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} className="glass-card" onClick={e => e.stopPropagation()}>
        <div style={styles.header}>
          <h2 style={styles.title}>Visitor Logs</h2>
          <button style={styles.closeBtn} onClick={onClose}>×</button>
        </div>
        
        <div style={styles.tableContainer} className="custom-scrollbar">
          {loading ? (
            <div style={styles.loading}>Loading...</div>
          ) : (
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>No.</th>
                  <th style={styles.th}>IP / ISP</th>
                  <th style={styles.th}>Location / TZ</th>
                  <th style={styles.th}>Environment</th>
                  <th style={styles.th}>Referrer</th>
                  <th style={styles.th}>Time</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} style={styles.tr}>
                    <td style={styles.td}>{log.order}</td>
                    <td style={styles.td}>
                      <div>{log.ip}</div>
                      <div style={styles.subtext}>{log.isp || '-'}</div>
                    </td>
                    <td style={styles.td}>
                      <div>{log.location}</div>
                      <div style={styles.subtext}>{log.timezone || '-'}</div>
                    </td>
                    <td style={styles.td}>
                      <div>{log.os} / {log.browser}</div>
                      <div style={styles.subtext}>
                        {log.deviceType || 'Desktop'} ({log.screenResolution || '-'}) | {log.language || '-'}
                      </div>
                    </td>
                    <td style={styles.td}>
                      <span style={styles.badge}>{log.referrer || 'Direct'}</span>
                    </td>
                    <td style={styles.td}>{new Date(log.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
                {logs.length === 0 && (
                  <tr>
                    <td colSpan="6" style={styles.empty}>No logs found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    width: '90%',
    maxWidth: '900px',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    position: 'relative',
    animation: 'slideUpFade 0.3s ease-out forwards',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '1rem',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    color: 'var(--accent-primary)',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    fontSize: '2rem',
    cursor: 'pointer',
    lineHeight: 1,
    padding: '0 0.5rem',
  },
  tableContainer: {
    overflowY: 'auto',
    overflowX: 'auto',
    flex: 1,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  thead: {
    position: 'sticky',
    top: 0,
    background: 'var(--card-bg)',
    zIndex: 1,
  },
  th: {
    padding: '1rem 0.5rem',
    borderBottom: '2px solid var(--border-color)',
    color: 'var(--text-secondary)',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  tr: {
    borderBottom: '1px solid var(--border-color)',
    transition: 'background-color 0.2s',
  },
  td: {
    padding: '1rem 0.5rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    wordBreak: 'keep-all',
  },
  loading: {
    textAlign: 'center',
    padding: '3rem',
    color: 'var(--text-secondary)',
  },
  empty: {
    textAlign: 'center',
    padding: '3rem',
    color: 'var(--text-secondary)',
  },
  subtext: {
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
    marginTop: '0.25rem',
  },
  badge: {
    display: 'inline-block',
    padding: '0.2rem 0.5rem',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
  }
};

export default VisitorLogsModal;
