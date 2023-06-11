import React from 'react';

const PopularClassCard = ({ item }) => {
    const { _id, className, classImg, instructorName, instructorEmail, instructorImg, status, availableSeats, price, enrolled } = item;
    return (
        <>
            <div className="p-5 bg-base-100 border-2 rounded-md hover:shadow-xl">
                <figure><img src={classImg} className='rounded' alt="Shoes" /></figure>
                <div className="mt-4">
                    <h2 className="text-center text-blue-700 font-bold text-3xl">{className}</h2>
                    <div className='flex gap-2 justify-center mt-4'>
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