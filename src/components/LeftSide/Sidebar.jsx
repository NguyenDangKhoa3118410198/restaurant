import React from 'react';
import { Link } from 'react-router-dom';

import Menu, { MenuItem, MenuItemDropdown } from './Menu';
import './Sidebar.css';
import Logo from '../../imgs/logo.png';
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilVideo,
} from '@iconscout/react-unicons';

const Sidebar = ({ isMenuActive, toggleBurger }) => {
    const dropdownLinks = [
        { title: 'All Customers', to: '/' },
        { title: 'Add Customer', to: '/customers' },
    ];

    return (
        <aside className={`side-menu ${isMenuActive ? 'open' : ''}`}>
            <div className="sidebar">
                <header className="head-sidebar">
                    <Link to="/" className="logo">
                        <div className="brand">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="logo">
                            <span>
                                K<span>o</span>ss
                            </span>
                        </div>
                    </Link>
                    <button className="close-button" onClick={toggleBurger}>
                        X
                    </button>
                </header>
                <Menu>
                    <MenuItem
                        title="Home"
                        to="/"
                        icon={<UilEstate />}
                        className="menuItem"
                    />
                    <MenuItem
                        title="Orders"
                        to="/orders"
                        icon={<UilClipboardAlt />}
                        className="menuItem"
                    />
                    <MenuItem
                        title="Customers"
                        to="/customers"
                        icon={<UilUsersAlt />}
                        className="menuItem"
                    />
                    <MenuItem
                        title="Products"
                        to="/products"
                        icon={<UilPackage />}
                        className="menuItem"
                    />
                    <MenuItem
                        title="Analytics"
                        // dropdownLinks={dropdownLinks}
                        to="/analytics"
                        icon={<UilChart />}
                        className="menuItem"
                    />
                    <MenuItem
                        title="Videos"
                        to="/video"
                        icon={<UilVideo />}
                        className="menuItem"
                    />

                    <div style={{ marginBottom: '2rem' }}></div>
                </Menu>
            </div>
        </aside>
    );
};

export default Sidebar;