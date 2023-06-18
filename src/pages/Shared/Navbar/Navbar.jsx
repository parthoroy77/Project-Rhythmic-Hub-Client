import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/rhythmic-hub.png'
import { WiDaySunny, WiNightAltCloudy, WiNightAltHail, WiNightAltSnow } from 'react-icons/wi'
import { HiUserCircle } from 'react-icons/hi'
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';
const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    const handleLogOut = () => {
        logOut().then(result => toast.success("Log Out Successfully")).catch(err => toast.error(err.message))
    }
    const menuItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/classes'}>Classes</Link></li>
        <li><Link to={'/instructors'}>Instructors</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        {
            user ? <><li><button onClick={handleLogOut}>Logout</button></li></>
                : <><li><Link to={'/login'}>Login</Link></li></>
        }
    </>
    useEffect(() => {
        const htmlElement = document.getElementById('theme');
        if (htmlElement) {
            htmlElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        }
    }, [isDarkMode]);
    return (
        <div className='px-4 lg:px-24 shadow-lg'>
            <div className="navbar rounded-md ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu font-semibold menu-sm  text-[18px] dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-[18px]">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div className='navbar-end flex gap-3'>
                    <button onClick={toggleTheme}>
                        {
                            isDarkMode ? <WiDaySunny className='text-4xl'></WiDaySunny>
                                : <WiNightAltCloudy className='text-4xl'></WiNightAltCloudy>
                        }
                        
                        
                    </button>
                    {
                        user && <label tabIndex={0} title={user.displayName} className="btn btn-ghost btn-circle avatar">
                            {
                                user && <div className="w-14 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            }
                        </label>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;