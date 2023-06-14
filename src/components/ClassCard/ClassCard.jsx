import React from 'react';
import useRole from '../../hooks/useRole';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ item }) => {
    const [isRole] = useRole();
    const { user } = useAuth();
    console.log(isRole);
    const { _id, className, classImg, instructorName, instructorEmail, instructorImg, status, availableSeats, price, enrolled } = item;
    const navigate = useNavigate()
    const handleSelectClass = (classItem) => {
        const { _id, classImg, className, price, instructorName } = classItem;
        if (!user) {
            toast.error("Please Login First");
            navigate('/login')
        }
        if (user && user.email) {
            const selectedClass = {
                classId: _id, classImg, className, email: user.email, price, instructorName
            }
            fetch('https://rhythmic-hub-server.vercel.app/selectedClass', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(selectedClass)
            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    toast.success('Class Selected Successfully')
                }
            })

        }
    }
    return (
        <>
            <div className={`card bg-base-100 border-2 rounded-md ${availableSeats === 0 ? 'border-2 bg-red-200 border-red-600' : ''}`}>
                <figure><img src={classImg} className='w-full h-[250px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-mono">{className}</h2>
                    <hr className='border-2' />
                    <div className='text-[18px] font-semibold'>
                        <p>Instructor Name: {instructorName}</p>
                        <p>Available Seats: {availableSeats}</p>
                        <p>Student Enrolled: {enrolled}</p>
                        <p>Price: {price}</p>
                    </div>
                    <div className="">
                        <button
                            onClick={() => handleSelectClass(item)}
                            disabled={isRole !== 'student' || availableSeats === 0}
                            className="btn w-full btn-info font-bold">Select Class
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassCard;