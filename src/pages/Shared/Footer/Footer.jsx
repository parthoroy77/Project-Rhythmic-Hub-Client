import React from 'react';
import logo from '../../../assets/logo/rhythmic-hub.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bottom-0 font-semibold w-full '>
            <footer className="footer py-10 px-20 bg-slate-900 text-white ">
                <div className='font-semibold'>
                    <div className='flex items-center'>
                        <img src={logo} className='w-16' alt="" />
                        <p className='text-xl font-mono'>Rhythmic Hub</p>
                    </div>
                    <p>
                        Unlock Your Musical Potential.
                    </p>
                    <div className='flex text-3xl gap-4'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaYoutube></FaYoutube>
                    </div>
                </div> 
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-slate-900 text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by Rhythmic Hub.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;