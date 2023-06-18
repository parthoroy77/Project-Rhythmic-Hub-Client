import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const PopularInstructorCard = ({ item }) => {
    const { _id, className, classImg, instructorName, instructorEmail, instructorImg, status, availableSeats, price, enrolled } = item;
    return (
        <>
            <div data-aos='fade-up' data-aos-duration='1300' className=" bg-base-100 border-dashed border-[3px] flex flex-col justify-between rounded-md shadow-md hover:shadow-xl">
                <figure className='px-5 py-4 '>
                    <img src={instructorImg} className='rounded-2xl h-[250px] w-full' alt="Shoes" />
                </figure>
                <div className="mb-5 text-center">
                    <h2 className='text-2xl text-black font-bold font-serif'>{instructorName}</h2>
                    <div className='flex justify-evenly my-2 items-center'>
                        <button className='btn font-bold'>
                            Enrolled: {enrolled}
                        </button>
                        <button className='btn font-bold'>
                            Available Seats: {availableSeats}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularInstructorCard;