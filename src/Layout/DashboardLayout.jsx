import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo/rhythmic-hub.png'
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useRole from '../hooks/useRole';
const DashboardLayout = () => {
    const { user } = useAuth();
    // const [isAdmin] = useAdmin();
    const [isRole] = useRole()
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
                    <ul className="menu p-4 w-80 h-full font-semibold bg-teal-300 text-[16px] space-y-4  text-base-content">
                        {/* Sidebar content here */}
                        <div className='text-center space-y-3'>
                            <div className='flex items-center'>
                                <img src={logo} className='w-16' alt="" />
                                <h2 className='text-2xl font-bold'>Rhythmic Hub</h2>
                            </div>
                            <div className='flex flex-col-reverse justify-evenly gap-2 items-center'>
                                <img src={user.photoURL} className='rounded-lg w-28' alt="" />
                                <h4 className='text-xl'>Hi, {user.displayName}</h4>
                            </div>
                            <hr className='border-3 border-blue-800 my' />
                        </div>
                        <li>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </li>
                        {
                            isRole === 'admin' && <>
                                <li>
                                    <Link to={'/dashboard/manageUsers'}>Manage Users</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/manageClass'}>Manage CLasses</Link>
                                </li>
                            </>
                        }
                        {/* student */}
                        {
                            isRole === 'student' && <>
                                <li>
                                    <Link to={'/dashboard/selectedClass'}>My Selected Class</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/enrolledClass'}>My Enrolled Class</Link>
                                </li>
                                <li>
                                    <Link to={`/dashboard/paymentHistory`}>Payment History</Link>
                                </li>
                            </>
                        }
                        {/* instructors */}
                        {
                            isRole === 'instructor' && <>
                                <li>
                                    <Link to='/dashboard/addClass'>Add A Class</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/myClass'}>My Classes</Link>
                                </li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardLayout;