import React, { useState } from 'react';
import Lottie from 'lottie-react'
import animation from '../../assets/Animation/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const { loginUser } = useAuth()
    const [visible, setVisible] = useState(true)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate()
    const onSubmit = data => {
        loginUser(data.email, data.password).then(result => {
            toast.success('Login Successfully')
            navigate(from, { replace: true })
        }).catch(err => toast.error(err.message))
    }
    return (
        <div
            className='bg-accent min-h-[80vh]
            px-4 lg:px-24 py-10
            flex flex-col items-center justify-center lg:flex-row'>
            <Helmet>
                <title>RH | Login</title>
            </Helmet>
            <div className='lg:w-1/2 text-center'>
                <Lottie className='lg:w-[80%]' animationData={animation}></Lottie>
            </div>
            <div className='lg:w-1/2 rounded-lg mb-5 hover:shadow-lg bg-base-100 py-10 w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-4'>
                    <h3 className='text-center text-3xl font-bold'>Login Now</h3>
                    <div className="form-control">
                        <input type="text"
                            {...register('email', { required: true })}
                            placeholder="Email"
                            className="input  rounded-sm bg-slate-100 font-semibold w-[80%] mx-auto" />
                    </div>
                    <div className="form-control relative">
                        <input
                            type={visible ? 'password' : 'text'}
                            {...register('password', { required: true })}
                            placeholder="Password"
                            className="input  rounded-sm bg-slate-100 font-semibold w-[80%] mx-auto" />
                        {
                            visible ? <FaEye onClick={()=>setVisible(false)} className='absolute right-[80px] top-3 text-2xl' />
                                :    <FaRegEyeSlash onClick={() => setVisible(true)} className='absolute right-[80px] top-3 text-2xl' />
                        }
                        {/* <label className="label ml-16">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control mt-6 w-[80%]  mx-auto">
                        <input type='submit' value={'Login'} className="btn bg-sky-400 text-black hover:bg-sky-300" />
                    </div>
                </form>
                <div className='text-center space-y-3 mt-3'>
                    <Link to='/registration'>
                        <p className='label-text-alt text-orange-400 text-[14px] font-bold link link-hover'>Don't Have Account? Create Now</p>
                    </Link>
                    <div className='divider w-2/3 mx-auto'>OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;