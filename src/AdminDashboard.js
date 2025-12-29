import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Calendar, MessageSquare, Trash2, CheckCircle } from 'lucide-react';
import { getContactMessages } from './services/api';

const AdminDashboard = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const data = await getContactMessages();
                setMessages(data);
            } catch (err) {
                setError('Failed to fetch messages. Please ensure the backend is running.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="modal active" onClick={onClose}>
            <div className="modal-content admin-dashboard-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="info-icon info-icon-primary" style={{ padding: '0.5rem' }}>
                            <MessageSquare size={20} />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Customer Messages</h2>
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="modal-body" style={{ padding: '1.5rem', maxHeight: '80vh', overflowY: 'auto' }}>
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '3rem' }}>
                            <div className="loading-spinner"></div>
                            <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)' }}>Loading messages...</p>
                        </div>
                    ) : error ? (
                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--secondary)' }}>
                            <p>{error}</p>
                        </div>
                    ) : messages.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--muted-foreground)' }}>
                            <p>No messages found.</p>
                        </div>
                    ) : (
                        <div className="messages-list">
                            {messages.map((msg) => (
                                <div key={msg._id} className="message-item-card">
                                    <div className="message-header">
                                        <div className="user-info">
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{msg.name}</h4>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    <Mail size={14} /> {msg.email}
                                                </span>
                                                {msg.phone && (
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                        <Phone size={14} /> {msg.phone}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="message-date" style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Calendar size={14} /> {formatDate(msg.submittedAt || msg.createdAt)}
                                        </div>
                                    </div>

                                    <div className="message-content" style={{ marginTop: '1rem', padding: '1rem', background: 'var(--muted)', borderRadius: '0.5rem' }}>
                                        {msg.destination && (
                                            <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                                <strong style={{ color: 'var(--primary)' }}>Interested in: </strong>
                                                <span>{msg.destination}</span>
                                            </div>
                                        )}
                                        <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--foreground)' }}>{msg.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <style jsx="true">{`
                .admin-dashboard-modal {
                    max-width: 900px !important;
                    width: 95% !important;
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem;
                    border-bottom: 1px solid var(--border);
                }
                .message-item-card {
                    background: var(--background);
                    border: 1px solid var(--border);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin-bottom: 1.5rem;
                    transition: all 0.3s ease;
                }
                .message-item-card:hover {
                    border-color: var(--primary);
                    box-shadow: var(--shadow-soft);
                }
                .message-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 1rem;
                }
                @media (max-width: 640px) {
                    .message-header {
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
