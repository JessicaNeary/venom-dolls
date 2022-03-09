import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import Logo from "../images/logo-white.svg";

function Header({ path, pageRef, clearHeader, handleCartClick }) {
    const [ bgColor, setBg ] = useState(clearHeader ? 'bg-transparent' : 'bg-dark')
    useEffect(() => {
        const checkBackground = () => {
            if (bgColor === 'bg-transparent' && pageRef.current && window.pageYOffset >= pageRef.current.offsetTop) {
                setBg('bg-dark');
            }        
            else if (bgColor === 'bg-dark' && pageRef.current && window.pageYOffset < pageRef.current.offsetTop) {
                setBg('bg-transparent');
            }
        };
        if (clearHeader && pageRef ) {
            window.addEventListener('scroll', checkBackground)
        }
    }, [bgColor, clearHeader, pageRef])
    const getLinkColor = (page) => (
        path === page ? 'text-secondary' : 'text-white'
    );
    return (
        <div className={`container-fluid header-container z-index-2 w-100 ${clearHeader ? 'position-fixed' : 'position-absolute'} ${bgColor}`}>
        <header className="row py-2">
            <a href="/" className="d-flex align-items-center col-2 mb-md-0 text-dark text-decoration-none">
                <Logo className="bi me-2" fill="#fffff" width="90" height="60" aria-label="venom-dolls-logo" />
            </a>

            <ul className="nav col-7 mb-2 justify-content-between align-items-center mb-md-0">
                <li><Link to="/" className={`nav-link px-2 ${getLinkColor('/')}`} >Home</Link></li>
                <li><Link to="/music" className={`nav-link px-2 ${getLinkColor('/music')}`}>Music</Link></li>
                <li><Link to="/events" className={`nav-link px-2 ${getLinkColor('/events')}`}>Events</Link></li>
                <li><Link to="/merch" className={`nav-link px-2 ${getLinkColor('/merch')}`}>Merch</Link></li>
            </ul>

            <div className="col d-flex justify-content-end align-items-center mb-md-0 mr-2">
                <div role="button" onClick={handleCartClick}>Cart</div>
            </div>
        </header>
        </div>
    )
}

export default Header;