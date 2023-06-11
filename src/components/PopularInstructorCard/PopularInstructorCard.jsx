import React from 'react';

const PopularInstructorCard = ({ item }) => {
    const { _id, className, classImg, instructorName, instructorEmail, instructorImg, status, availableSeats, price, enrolled } = item;
    return (
        <>
            <div className=" bg-base-100 border-2 rounded-md shadow-md hover:shadow-xl">
                <figure><img src={instructorImg} alt="Shoes" /></figure>
                <div className="my-5 flex justify-center gap-4">
                    <button className='btn btn-accent font-bold text-black'>Name: {instructorName}</button>
                    <button className='btn btn-active'>Student Enrolled: {enrolled}</button>
                </div>
            </div>
        </>
    );
};

export default PopularInstructorCard;