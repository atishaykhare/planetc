import React from 'react';
import s from './footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.nav}>
                <span>About Us</span>
                <span>Term and Conditions</span>
                <span>Privacy Policy</span>
                <span>Refund Policy</span>
                <span>Faq</span>
                <span>Contact us Policy</span>
            </div>
            <div className={s.social}>
                <span>
                    Connect With Us
                </span>
                <div className={s.socialIcons}>
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;