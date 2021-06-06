import React, {useState} from 'react';
import './header.css';
import Logo from '../../Assets/logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <Link to="/">
                        <img src={Logo} className="logo"/>
                    </Link>
                </div>

                <ul className={click ? "nav-options active" : "nav-options"}>
                    <div className="mobile-menu-welcome">
                        <span className="userCircle">U</span>
                    <div>
                        <p className="welcomeMsg">Welcome</p>

                        <small>atishaykhare123@gmail.com</small>
                    </div>
                    </div>
                    <div>
                        <hr/>
                    <li className="option">
                        <Link to="/watch" onClick={handleClick}>About</Link>
                    </li>
                    <li className="option">
                        <Link to="/watch" onClick={handleClick}>Contact</Link>
                    </li>
                    <li className="option">
                        <Link to="/watch" onClick={handleClick}>Blog</Link>
                    </li>
                    </div>
                    <div>
                        <hr/>
                     <li className="option">
                            <Link to="#">Profile</Link>
                        </li>
                     <li className="option">
                            <Link to="#">Watchlist</Link>
                        </li>
                     <li className="option">
                            <Link to="#">Ticket</Link>
                        </li>
                     <li className="option">
                            <Link to="#">Logout</Link>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="mobileLogin">
                <div className="loginContainer">
                    <i className="fa fa-search"/>
                    <div className="dropdown">
                        <span className="dropbtn userCircle">U</span>
                        <div className="dropdown-content">
                            <div className="userDetail">
                                <span className="userCircle">U</span>
                                <div className="data">
                                    <span className="welcomeMsg">Welcome</span>
                                    <span>atishaykhare123@gmail.com</span>
                                </div>
                            </div>
                            <hr/>
                            <span className="dropdown-list">
                            <i className="fa fa-address-book-o" aria-hidden="true"></i>
                            <Link to="#">Profile</Link>
                        </span>
                            <span className="dropdown-list">
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <Link to="#">Watchlist</Link>
                        </span>
                            <span className="dropdown-list">
                            <i className="fa fa-ticket" aria-hidden="true"></i>
                            <Link to="#">Ticket</Link>
                        </span>
                            <span className="dropdown-list">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            <Link to="#">Logout</Link>
                        </span>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <i className="fa fa-times"/>
                    ) : (
                        <i className="fa fa-bars"></i>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;