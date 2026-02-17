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
            details: ['Mon - Sat: 9:30 AM - 6:30 PM', 'Sat: Closed', 'Sun: Closed']
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
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=86%2F1%2C%20208%20SFS%20COLONY%2C%202ND%20MAIN%20ROAD%2C%20YELAHANKA%20NEW%20TOWN%2C%20BENGALURU%20560064&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Map"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactInfo;
