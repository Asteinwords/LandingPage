import './Features.css';

function Features() {
    const features = [
        {
            icon: '🚀',
            title: 'Lightning Fast',
            description: 'Optimized performance with cutting-edge technology for blazing-fast load times and seamless user experience.'
        },
        {
            icon: '🎨',
            title: 'Beautiful Design',
            description: 'Stunning, modern interfaces that captivate users and elevate your brand with premium aesthetics.'
        },
        {
            icon: '🔒',
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security and 99.9% uptime guarantee to keep your data safe and accessible.'
        },
        {
            icon: '📱',
            title: 'Fully Responsive',
            description: 'Perfect experience across all devices - desktop, tablet, and mobile with adaptive layouts.'
        },
        {
            icon: '⚡',
            title: 'Real-time Updates',
            description: 'Instant synchronization and live updates to keep your team connected and productive.'
        },
        {
            icon: '🌐',
            title: 'Global Reach',
            description: 'CDN-powered delivery and multi-language support for worldwide accessibility and performance.'
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Why Choose <span className="gradient-text">Us</span>
                    </h2>
                    <p className="section-description">
                        Powerful features designed to help you succeed
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card glass-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-hover-effect"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
