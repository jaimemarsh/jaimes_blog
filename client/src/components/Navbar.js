import React, { useState } from 'react';
import Logo from '../images/getTechyLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
// 48.11
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img className="image is-128x128" src={Logo} alt="Logo"/>
                </Link>
                <div
                    className={`navbar-burger burger ${menuOpen ? 'is-active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
                <div className="navbar-start"></div>
                <div className="navbar-end">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to="/" className="navbar-link google-font-ss">
                            Posts
                        </Link>
                        <div className="navbar-dropdown">
                            <Link to="/" className="navbar-item">
                                ONE
                            </Link>

                            <Link to="/" className="navbar-item">
                               TWO
                            </Link>
                        </div>
                    </div>
                    <Link to="/Contact" className="navbar-item google-font-ss">
                        Contact Me
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
