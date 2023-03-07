import React from 'react';
import logo from './logo.svg';
import {FaTimes} from 'react-icons/fa';
import {social, links} from './data';
import {useAppContext} from './context';

const Sidebar = () => {
    const {isSidebar, toggleSidebar} = useAppContext();
    return (
        <aside className={`${isSidebar? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} className='logo' alt='logo'/>
                <button className='close-btn' onClick={toggleSidebar}><FaTimes/></button>
            </div>
            <ul className='links'>
                {links.map((item) => {
                    const {id, url, text, icon} = item;
                    return (
                        <li key={id}><a href={url}>{icon}{text}</a></li>
                    )
                })}
            </ul>
            <ul className='social-icons'>
                {social.map((item) => {
                    const {id, url, icon} = item;
                    return (
                        <li key={id}><a href={url}>{icon}</a></li>
                    )
                })}
            </ul>
        </aside>
    )
};

export default Sidebar;