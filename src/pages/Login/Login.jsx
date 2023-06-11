import React from 'react';
import Lottie from 'lottie-react'
import animation from '../../assets/Animation/login.json'
import { Link } from 'react-router-dom';
import {FaGithub, FaGoogle} from 'react-icons/fa'
const Login = () => {
    return (
        <div
            className='bg-accent min-h-[80vh]
            px-4 lg:px-24 py-10
            flex flex-col items-center justify-center lg:flex-row'>
            <div className='lg:w-1/2 text-center'>
                <Lottie className='lg:w-[80%]' animationData={animation}></Lottie>
            </div>
            <div className='lg:w-1/2 rounded-lg mb-5 hover:shadow-lg bg-base-100 py-10 w-full'>
                <form className='w-full space-y-4'>
                    <h3 className='text-center text-3xl font-bold'>Login Now</h3>
                    <div className="form-control">
                        <input type="text" placeholder="email"
                            className="input  rounded-sm bg-slate-100 uppercase font-semibold w-[80%] mx-auto" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="password"
                            className="input  rounded-sm bg-slate-100 uppercase font-semibold w-[80%] mx-auto" />
                        <label className="label ml-16">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 w-[80%]  mx-auto">
                        <button className="btn bg-sky-400 text-black hover:bg-sky-300">Login</button>
                    </div>
                </form>
                <div className='text-center space-y-3 mt-3'>
                    <Link to='/signUp'>
                        <p className='label-text-alt text-orange-400 text-[14px] font-bold link link-hover'>Don't Have Account? Create Now</p>
                    </Link>
                    <div className='divider w-2/3 mx-auto'>OR</div>
                    <div className='flex gap-4 justify-center'>
                        <button className='btn btn-info flex items-center'>
                            <FaGoogle></FaGoogle> <span>Sign In</span>
                        </button>
                        <button className='btn flex  btn-info items-center'>
                            <FaGithub></FaGithub> <span>Sign In</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;