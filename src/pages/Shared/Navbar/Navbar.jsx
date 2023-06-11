import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/rhythmic-hub.png'
const Navbar = () => {
    const menuItems = <>
        <li><Link>Home</Link></li>
        <li><Link>Classes</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Dashboard</Link></li>
    </>
    return (
        <div className='px-4 lg:px-24 shadow-lg rounded-lg bg-white'>
            <div className="navbar rounded-md ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="uppercase text-sm lg:text-xl font-bold">
                        <div className='flex items-center justify-center'>
                            <img src={logo} alt="" className='w-16 h16' />
                            <h3 className=''>Rhythmic Hub</h3>
                        </div>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {
                            menuItems
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;