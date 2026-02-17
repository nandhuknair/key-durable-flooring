import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
    const infoItems = [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Our Office',
            details: ['86/1,208 SFS COLONY,', '2ND MAIN ROAD, YELAHANKA NEW TOWN,', 'BENGALURU 560064', 'GSTIN: 29AZNPP7453L1ZE']
        },
        {
            icon: <FaPhoneAlt />,
            title: 'Phone',
            details: ['+91 90749 07086']
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            details: ['Keydurableflooring@gmail.com']
        },
        {
            icon: <FaClock />,
            title: 'Working Hours',
            details: ['Mon - Sat: 9:30 AM - 6:30 PM','Sat: Closed','Sun: Closed']
        }
    ];

    return (
        <div>
            <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Get In Touch</h3>
                <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
                    Have a question about our products or services? Our team of experts is ready to assist you
                    with your sports infrastructure needs.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                    {infoItems.map((item, index) => (
                        <div key={index} style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{
                                fontSize: '1.5rem',
                                color: 'var(--primary)',
                                background: '#f0f0f0',
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>{item.title}</h4>
                                {item.details.map((line, i) => (
                                    <p key={i} style={{ color: '#666', fontSize: '0.95rem' }}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map Placeholder */}
            <div style={{
                width: '100%',
                height: '300px',
                background: '#e0e0e0',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
            }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129465696!2d77.06889966144883!3d28.527329294862522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactInfo;
