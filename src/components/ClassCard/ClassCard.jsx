import React from 'react';
import useRole from '../../hooks/useRole';

const ClassCard = ({ item }) => {
    const [isRole] = useRole();
    console.log(isRole);
    const { _id, className, classImg, instructorName, instructorEmail, instructorImg, status, availableSeats, price, enrolled } = item;
    console.log(item);
    return (
        <>
            <div className={`card bg-base-100 border-2 rounded-md ${availableSeats === 0 ? 'border-4 border-red-600': ''}`}>
                <figure><img src={classImg} className='w-full h-[250px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-mono">{className}</h2>
                    <hr className='border-2'/>
                    <div className='text-[18px] font-semibold'>
                        <p>Instructor Name: {instructorName}</p>
                        <p>Available Seats: {availableSeats}</p>
                        <p>Price: {price}</p>
                    </div>
                    <div className="">
                        <button
                            disabled={isRole === 'admin' || availableSeats === 0}
                            className="btn w-full btn-info font-bold">Select Class</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;