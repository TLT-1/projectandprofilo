import React, { useState } from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

const EmailForm = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        onClose();
    };

    return (
        <div className="email-form-container">
            <div className="email-form-content">
                <h2>Email Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email address"
                        required
                        value={email}
                        onChange={handleChange}
                    />
                    <textarea placeholder="Message" rows="5" required></textarea>
                    <button type="submit">Send</button>
                    <button type="button" className="cancel" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

function Footer() {
    const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);

    const toggleEmailForm = () => {
        setIsEmailFormOpen(!isEmailFormOpen);
    };

    const handleCloseEmailForm = () => {
        setIsEmailFormOpen(false);
    };

    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Contact</p>
                <p className="footer-subscription-text">Don't be shy! Hit me up!</p>
                <div className="input-areas">
                    <button className="textbox-button" onClick={toggleEmailForm}>
                        Email Me
                    </button>
                </div>
            </section>

            {isEmailFormOpen && (
                <div className="email-form-popup">
                    <div className="email-form-overlay" onClick={handleCloseEmailForm} />
                    <div className="email-form-popup-content">
                        <EmailForm onClose={handleCloseEmailForm} />
                    </div>
                </div>
            )}

        </div>
    );
}

export default Footer;
