import React from 'react';
import './Banner.css'
import instruments from '../../../assets/banner/instruments.png'
import {FaArrowRight} from 'react-icons/fa'
import { Slide } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between py-12 bg-[#bc1b68] min-h-screen text-base-300 px-4 lg:px-24 gap-5 items-center'>
            <div data-aos='fade-right' data-aos-duration='1500' className='lg:w-1/2 sm:text-center lg:text-left space-y-7'>
                <h1 className='text-4xl  lg:text-5xl font-bold'>School Of Music</h1>
                <p className='font-semibold pr-7'>
                    Experience the magic of our musical summer camp. Talented instructors, diverse classes, and a supportive community await you. Whether you're a beginner or advanced musician, our camp is designed to nurture your skills. From mastering instruments to vocal training and music production, we have it all. Join us and embark on a transformative musical journey that will ignite your creativity and create lifelong memories. Unleash your potential at our extraordinary camp.
                </p>
                <button className='btn btn-accent flex items-center font-bold'>
                    Enroll Now <FaArrowRight className='text-xl'></FaArrowRight>
                </button>
            </div>
            <div className='lg:w-1/2' data-aos='fade-left' data-aos-duration='1500'>
                <img src={instruments}  alt="" />
            </div>
        </div>
    );
};

export default Banner;