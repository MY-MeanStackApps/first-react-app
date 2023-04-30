import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main-nav">
                {/* Logo */}
                <div className="logo">
                    <h2>
                        <NavLink to="/">
                            <span>T</span>hapa
                            <span>T</span>echnical
                        </NavLink>
                    </h2>
                </div>

                {/* Menu Links */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <NavLink to="/">All Records</NavLink>
                        </li>
                        <li>
                            <NavLink to="/create-record">Create Record</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaYoutube className="youtube" />
                            </a>
                        </li>
                    </ul>

                    {/* Hamburger Menu */}
                    <div className="hamburger-menu">
                        <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
