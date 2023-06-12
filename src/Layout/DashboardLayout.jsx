import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo/rhythmic-hub.png'
const DashboardLayout = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full font-semibold text-[16px] space-y-4 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className='text-center space-y-4'>
                            <div className='flex items-center'>
                                <img src={logo} className='w-16' alt="" />
                                <h2 className='text-2xl font-bold'>Rhythmic Hub</h2>
                            </div>
                            <hr className='border-3 border-blue-800 my' />
                        </div>
                        <li>
                            <Link to={'/dashboard/manageUsers'}>Manage Users</Link>
                        </li>
                        <li>
                            <Link>Manage CLasses</Link>
                        </li>
                        {/* student */}
                        {/* <li>
                            <Link>My Selected Class</Link>
                        </li>
                        <li>
                            <Link>Payment</Link>
                        </li>
                        <li>
                            <Link>Payment History</Link>
                        </li> */}
                        {/* instructors */}
                        <li>
                            <Link to='/dashboard/addClass'>Add A Class</Link>
                        </li>
                        <li>
                            <Link>My Classes</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardLayout;