import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { _token, getCurrentUser, logout } from "../services/auth.service";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const token = _token();
    const currentUser = getCurrentUser();

    const logOut = () => {
        logout();
        navigate("/login");
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDisplayStyleBLock = {
        display: "block",
    };

    const toggleDisplayStyleNone = {
        display: "none",
    };

    const BeforeLoginLink = () => {
        return (
            <ul className="buy-button list-inline mb-0">
                <li className="list-inline-item mb-0">
                    <NavLink to="/register">
                        <div className="btn btn-sm btn-pills btn-soft-primary"> Register</div>
                    </NavLink>
                </li>
                <li className="list-inline-item ps-1 mb-0">
                    <NavLink to="/login">
                        <div className="btn btn-sm btn-pills btn-primary"> Login</div>
                    </NavLink>
                </li>
            </ul>
        )

    }

    const AfterLoginLink = () => {
        return (
            <ul className="buy-button list-inline mb-0">
                <li className="list-inline-item mb-0">
                    <NavLink to="/dashboard">
                        <div className="btn btn-sm btn-pills btn-soft-primary">
                            {currentUser.fullName}
                        </div>
                    </NavLink>
                </li>
                <li className="list-inline-item ps-1 mb-0">
                    <NavLink to="/login" onClick={logOut}>
                        <div className="btn btn-sm btn-pills btn-primary">
                            Logout
                        </div>
                    </NavLink>
                </li>
            </ul>

        )
    }


    return (
        <>
            <header id="topnav" className="defaultscroll navbar-white-bg">
                <Container>
                    <Link className="logo" to="/">
                        <span className="logo-light-mode">
                            <img src="../assets/images/logo-dark.png" className="l-lgiht" height={24} />
                            <img src="../assets/images/logo-light.png" className="l-dark" height={24} />
                        </span>
                        <img src="../assets/images/logo-light.png" height={24} className="logo-dark-mode" />
                    </Link>

                    <div className="menu-extras">
                        <div className="menu-item">
                            <a className={`navbar-toggle ${isOpen ? 'open' : ''}`}
                                id="isToggle"
                                onClick={toggleMenu}
                            >
                                <div className="lines">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </a>
                        </div>
                    </div>

                    {token ? <AfterLoginLink /> : <BeforeLoginLink />}

                    <div id="navigation" style={isOpen ? toggleDisplayStyleBLock : toggleDisplayStyleNone} >
                        <ul className="navigation-menu">
                            {/* <li className="has-submenu parent-parent-menu-item">
                                <a href="javascript:void(0)">Landing</a>
                                <span className="menu-arrow" />
                            </li> */}

                            <li>
                                <NavLink className="sub-menu-item" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="sub-menu-item" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="sub-menu-item" to="/anime">
                                    Anime
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="sub-menu-item" to="/contact">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default NavBar;
