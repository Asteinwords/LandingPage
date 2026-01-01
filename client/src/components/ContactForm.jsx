import { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await axios.post(`${API_URL}/api/contact`, formData);
            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title">
                            Let's Build Something
                            <br />
                            <span className="gradient-text">Amazing Together</span>
                        </h2>
                        <p className="section-description">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>hello@example.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        {status.message && (
                            <div className={`status-message ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
