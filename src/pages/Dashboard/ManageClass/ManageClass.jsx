import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaChessKing } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageClass = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json()
        }
    })
    const handleStatus = (item, status) => {
        fetch(`http://localhost:5000/classes/updateStatus?id=${item._id}&status=${status}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.modifiedCount) {
                toast.success(`Class ${status}`)
                refetch()
            }
        })
    }
    const handleFeedback = (item) => {
        console.log(item);
    }
    return (
        <div className='flex flex-col items-center justify-center py-16'>
            <div className='my-6'>
                <h1 className='text-4xl font-mono font-semibold text-center'>Manage Classes</h1>
                <div className='divider mb-0'></div>
            </div>
            <div>
                <div className="overflow-x-auto my-5">
                    <table className="table font-semibold">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Price</th>
                                <th>Available Seats</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.classImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            item.className
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.instructorName
                                        }
                                    </td>
                                    <td className=''>
                                        {
                                            item.instructorEmail
                                        }
                                    </td>
                                    <td className='text-left'>
                                        ${
                                            item.price
                                        }
                                    </td>
                                    <td className='text-center'>
                                        {
                                            item.availableSeats
                                        }
                                    </td>
                                    <td className='uppercase'>
                                        {
                                            item.status
                                        }
                                    </td>
                                    <td className='flex flex-col gap-2'>
                                        <button
                                            disabled={item.status !== 'pending'}
                                            onClick={() => handleStatus(item, 'approve')}
                                            className='btn btn-xs btn-info'>Approve
                                        </button>
                                        <button
                                            disabled={item.status !== 'pending'}
                                            onClick={() => handleStatus(item, 'deny')}
                                            className='btn btn-xs btn-accent'>Deny
                                        </button>
                                        <Link to={`/dashboard/feedback/${item._id}`}>
                                            <button
                                                disabled={item.status !== 'deny'}
                                                className='btn btn-xs btn-primary'>Feedback
                                            </button>
                                        </Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;