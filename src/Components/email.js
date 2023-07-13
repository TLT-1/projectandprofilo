import React, { useState } from 'react';
import './email.css'; // Import the CSS file with the styles

const Email = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleEmailForm = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="textbox-button" onClick={toggleEmailForm}>
                Click me
            </button>
            {isOpen && (
                <div className="dialog-container">
                    <div className="dialog-content">
                        <h2>Email Form</h2>
                        <form>
                            <input type="email" placeholder="Email address" required />
                            <textarea placeholder="Message" rows="5" required />
                            <button type="submit">Send</button>
                            <button type="button" className="cancel" onClick={toggleEmailForm}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Email;
