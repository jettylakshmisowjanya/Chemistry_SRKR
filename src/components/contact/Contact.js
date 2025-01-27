import React from 'react';
import './Contact.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About SRKR Section */}
                <div className="footer-section about">
                    <h4>About SRKR</h4>
                    <p>
                        Sagi Rama Krishnam Raju Engineering College (SRKREC), established in 1980, is a self-financed academic institution of coeducation striving to provide a high-quality technical education to engineering aspirants.
                    </p>
                </div>

                {/* Contact Us Section */}
                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><strong>Address:</strong> SRKR Marg, China Amiram, Bhimavaram, A.P, India - 534204</li>
                        <li><strong>Telephone:</strong> +91 (8816) 223332</li>
                        <li><strong>Mobile:</strong> +91 9848823332</li>
                        <li><strong>Email:</strong> <a href="mailto:principal@srkrec.ac.in">principal@srkrec.ac.in</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} SRKR Engineering College. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
