import React from 'react';
import './Banner.css'
import instruments from '../../../assets/banner/instruments.png'
import {FaArrowRight} from 'react-icons/fa'
const Banner = () => {
    return (
        <div className='flex justify-between py-12 px-4 gap-5 items-center'>
            <div className='lg:w-1/2 space-y-7'>
                <h1 className='text-5xl font-bold'>School Of Music</h1>
                <p className='font-semibold'>
                    Experience the magic of our musical summer camp. Talented instructors, diverse classes, and a supportive community await you. Whether you're a beginner or advanced musician, our camp is designed to nurture your skills. From mastering instruments to vocal training and music production, we have it all. Join us and embark on a transformative musical journey that will ignite your creativity and create lifelong memories. Unleash your potential at our extraordinary camp.
                </p>
                <button className='btn btn-accent flex items-center font-bold'>
                    Enroll Now <FaArrowRight className='text-xl'></FaArrowRight>
                </button>
            </div>
            <div className='lg:w-1/2'>
                <img src={instruments} className='' alt="" />
            </div>
        </div>
    );
};

export default Banner;