import React, { useContext, useState } from 'react';
import Logo from '../images/techyLogo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../css/Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const { currentUser, logout } = useContext(AuthContext)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="">
                    <img className="image" src={Logo} alt="Logo" />
                </Link>
                <div className="navbar-item">
                    <span>
                        {currentUser ? `Hi ${currentUser.username}!` : null}{' '}
                        {currentUser ? <Link to="/Write">Write</Link> : null}
                    </span>

                </div>
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
                <div className="navbar-end links">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to="/" className="navbar-link google-font-ss">
                            Posts
                        </Link>
                        <div className="navbar-dropdown">
                            <Link to="/?cat=art" className="link navbar-item">
                                ART
                            </Link>

                            <Link to="/?cat=science" className="link navbar-item">
                                SCIENCE
                            </Link>

                            <Link to="/?cat=technology" className="link navbar-item">
                                TECHNOLOGY
                            </Link>

                            <Link to="/?cat=cinema" className="link navbar-item">
                                CINEMA
                            </Link>

                            <Link to="/?cat=design" className="link navbar-item">
                                DESIGN
                            </Link>

                            <Link to="/?cat=food" className="link navbar-item">
                                FOOD
                            </Link>

                        </div>
                    </div>
                    <Link to="/Contact" className="navbar-item google-font-ss">
                        Contact Me
                    </Link>
                    <div className="navbar-item">
                        {currentUser ? <span onClick={logout}>Logout</span> : <Link className="link" to="/login">Login</Link>}
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
