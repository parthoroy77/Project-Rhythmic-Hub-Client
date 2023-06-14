import React from 'react';

const PopularClassCard = ({ item }) => {
    const { _id, className, classImg, instructorName, instructorEmail, instructorImg, status, availableSeats, price, enrolled } = item;
    return (
        <>
            {/* <div className="p-5 bg-base-100 border-2 h-full  rounded-md hover:shadow-xl flex flex-col justify-between">
                <figure><img src={classImg} className='rounded  w-full' alt="Shoes" /></figure>
                <div className="mt-4">
                    <h2 className="text-center text-blue-700 font-bold text-3xl">{className}</h2>
                    <div className=' space-y-3 mt-4'>
                        <button className='btn w-full btn-sm'>Available Seats: {availableSeats}</button>
                        <button className='btn w-full btn-sm'>Enrolled: {enrolled}</button>
                        <button className='btn w-full btn-sm'>Price: ${price}</button>
                    </div>
                </div>
            </div> */}
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={classImg} className='w-full' alt="Shoes" /></figure>
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