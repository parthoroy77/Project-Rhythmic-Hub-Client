import React from 'react';
import './Banner.css'
import instruments from '../../../assets/banner/instruments.png'
import {FaArrowRight} from 'react-icons/fa'
import { Slide } from 'react-awesome-reveal';
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between py-12 px-4 gap-5 items-center'>
            <Slide duration={1500} className='lg:w-1/2'>
                <div className=' sm:text-center lg:text-left space-y-7'>
                    <h1 className='text-4xl  lg:text-5xl font-bold'>School Of Music</h1>
                    <p className='font-semibold pr-7'>
                        Experience the magic of our musical summer camp. Talented instructors, diverse classes, and a supportive community await you. Whether you're a beginner or advanced musician, our camp is designed to nurture your skills. From mastering instruments to vocal training and music production, we have it all. Join us and embark on a transformative musical journey that will ignite your creativity and create lifelong memories. Unleash your potential at our extraordinary camp.
                    </p>
                    <button className='btn btn-accent flex items-center font-bold'>
                        Enroll Now <FaArrowRight className='text-xl'></FaArrowRight>
                    </button>
                </div>
            </Slide>
            <Slide direction='right' duration={1500} className='lg:w-1/2'>
                <div className=''>
                    <img src={instruments} className='lg:w-[630px] lg:h-[580px]' alt="" />
                </div>
            </Slide>
        </div>
    );
};

export default Banner;