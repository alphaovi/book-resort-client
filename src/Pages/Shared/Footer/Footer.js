import React from 'react';
import "./Footer.css";

const Footer = () => {
    const year = new Date();
    const today = year.getFullYear();
    return (
        <div className="footer">
            <p>© Copyrignt {today} All rights reserved. Site  by Foysal Ahamed Ovi</p>
        </div>
    );
};

export default Footer;