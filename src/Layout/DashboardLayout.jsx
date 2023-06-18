import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo/rhythmic-hub.png'
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useRole from '../hooks/useRole';
import { FaBookReader, FaHome, FaStoreAlt, FaUsers } from 'react-icons/fa';
import { BiMessageSquareAdd, BiSelectMultiple } from 'react-icons/bi';
import { MdClass, MdPayments } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

const DashboardLayout = () => {
    const { user } = useAuth();
    // const [isAdmin] = useAdmin();
    const [isRole] = useRole()
    return (
        <>
            <Helmet><title>RH | Dashboard</title></Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-[18px] h-full font-semibold bg-teal-300 space-y-4  text-base-content">
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
                                 <FaHome className='text-2xl'/> Home
                            </Link>
                        </li>
                        {
                            isRole === 'admin' && <>
                                <li>
                                    <Link to={'/dashboard/manageUsers'}> <FaUsers className='text-2xl' /> Manage Users</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/manageClass'}><FaBookReader className='text-2xl' /> Manage CLasses</Link>
                                </li>
                            </>
                        }
                        {/* student */}
                        {
                            isRole === 'student' && <>
                                <li>
                                    <Link to={'/dashboard/selectedClass'}><BiSelectMultiple className='text-2xl '/> My Selected Class</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/enrolledClass'}><FaStoreAlt className='text-2xl'/> My Enrolled Class</Link>
                                </li>
                                <li>
                                    <Link to={`/dashboard/paymentHistory`}><MdPayments className='text-2xl'></MdPayments> Payment History</Link>
                                </li>
                            </>
                        }
                        {/* instructors */}
                        {
                            isRole === 'instructor' && <>
                                <li>
                                    <Link to='/dashboard/addClass'><BiMessageSquareAdd className='text-2xl'/> Add A Class</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/myClass'}><MdClass className='text-2xl'/> My Classes</Link>
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