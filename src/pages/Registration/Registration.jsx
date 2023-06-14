import React from 'react';
import Lottie from 'lottie-react'
import animation from '../../assets/Animation/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';
const Registration = () => {
    const { createUser, profileUpdate } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';
    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            createUser(data.email, data.password).then(result => {
                const loggedUser = result.user;
                profileUpdate(data.name, data.photo).then(result => {
                    const user = { name: data.name, email: data.email, role: 'student', image: data.photo }
                    fetch('http://localhost:5000/users', {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(user)
                    }).then(res => res.json()).then(data => {
                        if (data.insertedId) {
                            toast.success("User Created Successfully")
                            reset()
                            navigate(from, { replace: true })
                        }
                    })
                }).catch(err => { })
            }).catch(err => toast.error(err.message))
        }
        else {
            return toast.error('Please Enter Same Password in both field')

        }
    };
    return (
        <div
            className='bg-accent min-h-[80vh]
            px-4 lg:px-24 py-10
            flex flex-col items-center justify-center lg:flex-row'>
            <div className='lg:w-1/2 text-center'>
                <Lottie className='lg:w-[80%]' animationData={animation}></Lottie>
            </div>
            <div className='lg:w-1/2 rounded-lg mb-5 hover:shadow-lg bg-base-100 py-10 w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-4'>
                    <h3 className='text-center text-3xl font-bold'>Register Now</h3>
                    <div className="form-control">
                        <input type="text"
                            {...register('name', { required: true })}
                            placeholder="Name"
                            className="input  rounded-sm bg-slate-100 font-semibold w-[80%] mx-auto" />
                        {errors.name && <small className='ml-20 mt-2 text-red-500'>Name is required</small>}
                    </div>
                    <div className="form-control">
                        <input type="text"
                            {...register('photo', { required: true })}
                            placeholder="Photo Url"
                            className="input  rounded-sm bg-slate-100 font-semibold w-[80%] mx-auto" />
                        {errors.photo && <small className='ml-20 mt-2 text-red-500'>Photo URL is required</small>}
                    </div>
                    <div className="form-control">
                        <input type="email"
                            {...register('email', { required: true })}
                            placeholder="Email"
                            className="input  rounded-sm bg-slate-100 font-semibold w-[80%] mx-auto" />
                        {errors.email && <small className='ml-20 mt-2 text-red-500'>Email is required</small>}
                    </div>
                    <div className="form-control">
                        <input type="text"
                            {...register('password',
                                {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                })}
                            placeholder="Password"
                            className="input  rounded-sm bg-slate-100 font-semibold w-[80%] mx-auto" />
                        {errors.password && <small className='ml-20 mt-2 text-red-500'>Password is required</small>}
                        {errors.password?.type === 'minLength' && <small className='ml-20 mt-2 text-red-500'>Password is Must Be 6 Character</small>}
                        {errors.password?.type === 'pattern' && <small className='ml-20 mt-2 text-red-500'>Password is Must Have 1 uppercase, lowercase, special character</small>}
                    </div>
                    <div className="form-control">
                        <input type="text"
                            {...register('confirmPassword',
                                {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                })}
                            placeholder="Confirm Password"
                            className="input  rounded-sm bg-slate-100 font-semibold w-[80%] mx-auto" />
                        {errors.confirmPassword && <small className='ml-20 mt-2 text-red-500'>Confirm Password is required</small>}
                        {errors.confirmPassword?.type === 'minLength' && <small className='ml-20 mt-2 text-red-500'>Password is Must Be 6 Character</small>}
                        {errors.confirmPassword?.type === 'pattern' && <small className='ml-20 mt-2 text-red-500'>Password is Must Have 1 uppercase, lowercase, special character</small>}
                    </div>
                    <div className="form-control mt-6 w-[80%]  mx-auto">
                        <input type='submit' value={'Login'} className="btn bg-sky-400 text-black hover:bg-sky-300" />
                    </div>
                </form>
                <div className='text-center space-y-3 mt-3'>
                    <Link to='/login'>
                        <p className='label-text-alt text-orange-400 text-[14px] font-bold link link-hover'>Already Have Account? Login Now</p>
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

export default Registration;