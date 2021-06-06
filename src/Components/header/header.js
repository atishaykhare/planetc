import React, {useState} from 'react';
import './header.css';
import Logo from '../../Assets/logo.png';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#">
                        <img src={Logo} className="logo"/>
                    </a>
                </div>

                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option">
                        <a href="#">ABOUT</a>
                    </li>
                    <li className="option">
                        <a href="#">CONTACT</a>
                    </li>
                    <li className="option">
                        <a href="#">BLOG</a>
                    </li>
                </ul>
            </div>
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
                            <a href="#">Profile</a>
                        </span>
                        <span className="dropdown-list">
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <a href="#">Watchlist</a>
                        </span>
                        <span className="dropdown-list">
                            <i className="fa fa-ticket" aria-hidden="true"></i>
                            <a href="#">Ticket</a>
                        </span>
                        <span className="dropdown-list">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            <a href="#">Logout</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <i className="fa fa-times"/>
                ) : (
                    <i className="fa fa-home"></i>
                )}
            </div>
        </div>
    );
};

export default Header;