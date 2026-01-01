import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text fade-in-up">
                    <h1 className="hero-title">
                        Build Something
                        <br />
                        <span className="gradient-text">Extraordinary</span>
                    </h1>
                    <p className="hero-description">
                        Transform your ideas into reality with cutting-edge technology and innovative solutions.
                        We help businesses scale and succeed in the digital age.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            Get Started
                        </a>
                        <a href="#features" className="btn btn-secondary">
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="hero-visual float">
                    <div className="visual-card glass-card">
                        <div className="card-glow"></div>
                        <div className="code-snippet">
                            <div className="code-line">
                                <span className="code-keyword">const</span>
                                <span className="code-variable"> success</span>
                                <span className="code-operator"> = </span>
                                <span className="code-function">build</span>
                                <span className="code-bracket">(</span>
                            </div>
                            <div className="code-line code-indent">
                                <span className="code-property">innovation</span>
                                <span className="code-operator">, </span>
                            </div>
                            <div className="code-line code-indent">
                                <span className="code-property">dedication</span>
                                <span className="code-operator">, </span>
                            </div>
                            <div className="code-line code-indent">
                                <span className="code-property">excellence</span>
                            </div>
                            <div className="code-line">
                                <span className="code-bracket">)</span>
                                <span className="code-operator">;</span>
                            </div>
                        </div>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Success Rate</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll to explore</p>
            </div>
        </section>
    );
}

export default Hero;
