import React from 'react';
import {FaBars} from 'react-icons/fa';
import {useAppContext} from './context';

const Home = () => {
    const {toggleModal,toggleSidebar} = useAppContext();
    return (
        <main>
            <button className='sidebar-toggle' onClick={toggleSidebar}><FaBars/></button>
            <button className='btn' onClick={toggleModal}>show modal</button>
        </main>
    )
};

export default Home;