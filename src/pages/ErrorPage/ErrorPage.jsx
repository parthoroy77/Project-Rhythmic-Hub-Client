import React from 'react';
import error from '../../assets/Animation/error.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='min-h-screen text-center'>
            <Lottie animationData={error} className='h-[500px]'></Lottie>
            <h1 className='text-5xl text-center font-bold'>Page Not Fount</h1>
            <Link to={'/'}>
                <button className='btn btn-error w-1/3 my-5 text-white'>Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;