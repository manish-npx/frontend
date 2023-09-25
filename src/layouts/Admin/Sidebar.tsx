import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MENU } from '../../constants/menuBarNameConstant';
import MenuItem from './MenuItem';
import { logout } from '../../services/auth.service';


export interface IMenuItem {
    name: string;
    icon?: string;
    path?: string;
    children?: Array<IMenuItem>;
}

const Sidebar: React.FC = () => {



    const navigate = useNavigate();
    const logOut = () => {

        logout();
        navigate('/login')
    }


    return (
        <>

            <Nav id="sidebar" className="sidebar-wrapper sidebar-dark" >
                <div className="sidebar-content" data-simplebar style={{ height: "calc(100% - 60px)" }}>
                    <div className="sidebar-brand">
                        <Link to='/'>
                            <span className="sidebar-colored">
                                <img src="assets/images/logo-light.png" height="24" alt="" />
                            </span>
                        </Link>
                    </div>

                    <Nav.Item className="sidebar-menu">

                        {MENU.map((menuItem: IMenuItem) => (
                            <MenuItem
                                key={menuItem.name + menuItem.path}
                                menuItem={menuItem}
                            />
                        ))}

                        <li>
                            <Link className='' to="/login" onClick={logOut}><i className={`ti ti-brand-gravatar me-2`}></i> Logout</Link>
                        </li>
                    </Nav.Item>

                </div>

            </Nav >


        </>
    );
};

export default Sidebar;
