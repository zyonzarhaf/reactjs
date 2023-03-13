import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Outlet/>
        </React.Fragment>
    )
};

export default Home;