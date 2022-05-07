import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import useWindowDimensions from "../utils/useWindowDimensions";
import ShoppingCart from "../images/shopping-cart.svg";
import Logo from "../images/logo-white.svg";
import Events from "../images/header/events.svg";
import Music from "../images/header/music.svg";
import Home from "../images/header/home.svg";
import Merch from "../images/header/merch.svg";
import EventsActive from "../images/header/events-active.svg";
import MusicActive from "../images/header/music-active.svg";
import HomeActive from "../images/header/home-active.svg";
import MerchActive from "../images/header/merch-active.svg";

function Header({ path, pageRef, clearHeader, handleCartClick }) {
    const [ bgColor, setBg ] = useState(clearHeader ? 'bg-transparent' : 'bg-black')
    useEffect(() => {
        const checkBackground = () => {
            if (bgColor === 'bg-transparent' && pageRef.current && window.pageYOffset >= pageRef.current.offsetTop) {
                setBg('bg-black');
            }        
            else if (bgColor === 'bg-black' && pageRef.current && window.pageYOffset < pageRef.current.offsetTop) {
                setBg('bg-transparent');
            }
        };
        if (clearHeader && pageRef) {
            window.addEventListener('scroll', checkBackground)
        }
    }, [bgColor, clearHeader, pageRef])
    const getLinkColor = (page) => (
        path === page ? 'text-danger' : 'text-white'
    );
    const { width } = useWindowDimensions();
    const useMobileIcons = width < 577;
    console.log(useMobileIcons)
    return (
        <div className={`container-fluid header-container z-index-2 w-100 position-fixed top-0 ${bgColor}`}>
            { width && 
        <header className="row py-2">
            { !useMobileIcons &&
                <a href="/" className="d-flex align-items-center col-2 mb-md-0 text-dark text-decoration-none">
                    <Logo className="bi me-2" fill="#fffff" width="90" height="60" aria-label="venom-dolls-logo" />
                </a>
            }

            { !useMobileIcons ? 
                <ul className="nav col-7 mb-2 justify-content-between align-items-center mb-md-0">
                    <li><Link to="/" className={`nav-link px-2 ${getLinkColor('/')}`} >Home</Link></li>
                    <li><Link to="/music" className={`nav-link px-2 ${getLinkColor('/music')}`}>Music</Link></li>
                    <li><Link to="/events" className={`nav-link px-2 ${getLinkColor('/events')}`}>Events</Link></li>
                    <li><Link to="/merch" className={`nav-link px-2 ${getLinkColor('/merch')}`}>Merch</Link></li>
                </ul>
            :
                <ul className="nav justify-content-around align-items-center">
                    <li>
                        <Link to="/" className="nav-link px-2" >
                            {   path === "/" ?
                                <HomeActive height="25" width="25" aria-label="home-link" /> :
                                <Home height="25" width="25" aria-label="home-link" />
                            }
                        </Link>
                    </li>
                    <li>
                        <Link to="/music" className="nav-link px-2">
                            { path === "/music" ?
                                <MusicActive height="25" width="25" aria-label="music-link" /> :
                                <Music height="25" width="25" aria-label="music-link" /> 
                            }
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" className="nav-link px-2">
                            { path === "/events" ?
                                <EventsActive height="25" width="25" aria-label="events-link" /> :
                                <Events height="25" width="25" aria-label="events-link" />
                            }
                        </Link>
                    </li>
                    <li>
                        <Link to="/merch" className="nav-link px-2">
                            { path === "/merch" ?
                                <MerchActive height="25" width="25" aria-label="merch-link" /> :
                                <Merch height="25" width="25" aria-label="merch-link" />
                            }
                        </Link>
                    </li>
                    <li>
                        <button className={`btn btn-outline-dark no-focus border-0 ${useMobileIcons && 'p-0'}`} onClick={handleCartClick}>
                            <ShoppingCart className="shopping-cart" height="25" aria-label="shopping-cart" />
                        </button>
                    </li>
                </ul>
            }

            { !useMobileIcons &&
                <div className={`col d-flex justify-content-end align-items-center mb-md-0 ${!useMobileIcons && 'mr-2'}`}>
                    <button className={`btn btn-outline-dark no-focus border-0 ${useMobileIcons && 'p-0'}`} onClick={handleCartClick}>
                        <ShoppingCart className="shopping-cart" height="35" aria-label="shopping-cart" />
                    </button>
                </div>
            }
        </header>
        }
        </div>
    )
}

export default Header;