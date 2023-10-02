import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import getTech from '../images/getTech.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const { currentUser, logout } = useContext(AuthContext)

    return (
        <nav className="navbar google-font-ss" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="">
                    <img className="logoImg" src={getTech} alt="Logo" />
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
                        <Link to="/Home" className="navbar-link google-font-ss">
                            Posts
                        </Link>
                        <div className="navbar-dropdown">
                            <Link to="/Home/?cat=website" className="link navbar-item">
                                WEBSITE DEVELOPMENT
                            </Link>

                            <Link to="/Home/?cat=errors" className="link navbar-item">
                                FIXING ERRORS
                            </Link>

                            <Link to="/Home/?cat=education" className="link navbar-item">
                                EDUCATION
                            </Link>

                            <Link to="/Home/?cat=skills" className="link navbar-item">
                                LIFE SKILLS
                            </Link>

                            <Link to="/Home/?cat=thoughts" className="link navbar-item">
                                MY THOUGHTS
                            </Link>

                            <Link to="/Home/?cat=tdb" className="link navbar-item">
                                TBD
                            </Link>

                        </div>
                    </div>
                    <Link to="/" className="navbar-item google-font-ss">
                        <button className="button is-danger">Subscribe</button>
                    </Link>
                    <div className="navbar-item">
                        {currentUser ? <span onClick={logout}>Logout</span> : <Link className="link" to="/login"><FontAwesomeIcon icon={faHeart} /></Link>}
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
