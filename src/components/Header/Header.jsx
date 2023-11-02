import React from 'react';

import './header.css';
import {
   UilUser,
   UilInfoCircle,
   UilQuestionCircle,
   UilSignout,
   UilBars,
   UilBell,
   UilCalendarAlt,
   UilSun,
} from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../features/darkmode/darkModeSlice';

const Header = ({ nameContent, toggleBurger }) => {
   const darkMode = useSelector((state) => state.darkMode);
   const dispatch = useDispatch();

   return (
      <header
         className={`nav-user-header-container ${darkMode ? 'darkmode' : ''}`}
      >
         <div className='nav-left'>
            <div onClick={toggleBurger} className='burger-icon'>
               <UilBars />
            </div>

            <h1 className='name-tab'>{nameContent}</h1>
         </div>

         <div className='nav-right'>
            <nav>
               <div className='user-utilities'>
                  <div
                     className='icon-menu-item'
                     onClick={() => {
                        dispatch(toggleDarkMode());
                     }}
                  >
                     <UilSun />
                  </div>

                  <Dropdown>
                     <Dropdown.Toggle className='user-profile'>
                        <UilUser />
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/'>
                           <div className='menu-item'>
                              <UilInfoCircle className='icon-menu-item-dropdown' />
                              <span className='name-menu-item'>Info</span>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/'>
                           <div className='menu-item'>
                              <UilBell className='icon-menu-item-dropdown' />
                              <span className='name-menu-item'>Logout</span>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/'>
                           <div className='menu-item'>
                              <UilCalendarAlt className='icon-menu-item-dropdown' />
                              <span className='name-menu-item'>Logout</span>
                           </div>
                        </Dropdown.Item>

                        <Dropdown.Item as={Link} to='/orders'>
                           <div className='menu-item'>
                              <UilQuestionCircle className='icon-menu-item-dropdown' />
                              <span className='name-menu-item'>Feedback</span>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/login'>
                           <div className='menu-item'>
                              <UilSignout className='icon-menu-item-dropdown' />
                              <span className='name-menu-item'>Logout</span>
                           </div>
                        </Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
