import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;