import React from 'react';

const PopularInstructorCard = ({ item }) => {
    const { _id, className, classImg, instructorName, instructorEmail, instructorImg, status, availableSeats, price, enrolled } = item;
    return (
        <>
            <div className=" bg-base-100 border-2 flex flex-col justify-between rounded-md shadow-md hover:shadow-xl">
                <figure className='px-5 py-4'>
                    <img src={instructorImg} className='rounded-2xl' alt="Shoes" />
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