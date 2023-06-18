import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
const PopularClassCard = ({ item }) => {
    const { _id, className, classImg, instructorName, instructorEmail, instructorImg, status, availableSeats, price, enrolled } = item;
    return (
        <>
            <div data-aos='fade-up' data-aos-duration='1300' className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={instructorImg} className='w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center text-4xl text-white font-semibold font-mono">{className}</h2>
                    <p></p>
                    <div className=' space-y-3 flex flex-col mt-4'>
                        <button className='btn btn-sm'>Available Seats: {availableSeats}</button>
                        <button className='btn btn-sm'>Enrolled: {enrolled}</button>
                        <button className='btn btn-sm'>Price: ${price}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularClassCard;