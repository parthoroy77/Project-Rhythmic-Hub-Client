import React from 'react';

const InstructorCard = ({instructor}) => {
    const {name, image, email} = instructor
    return (
        <>
            <div className="card bg-base-100 border-2 shadow-md rounded-md">
                <figure><img src={image} className='h-[250px] w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-mono text-xl">Instructor Name: {name}</h2>
                    <hr />
                    <p> <span className='text-green-800 font-bold mr-2'>Email:</span>{email}</p>
                </div>
            </div>
        </>
    );
};

export default InstructorCard;