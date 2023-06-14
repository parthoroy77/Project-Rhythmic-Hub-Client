import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: myClasses = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructorClass?email=${user?.email}`)
            return res.data;
        }
    })
    return (
        <div className='flex flex-col w-[80%] mx-auto justify-center items-center min-h-screen'>
            <div>
                <h2 className='text-4xl font-semibold font-mono'>My Classes</h2>
                <div className='divider'></div>
            </div>
            <div className='w-full'>
                <div className="overflow-x-auto border-2  rounded-md px-2 py-4 shadow-lg my-5">
                    <table className="table font-semibold">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Enrolled Student</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses?.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.classImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.className}</td>
                                    <td className=''>
                                        {
                                            item.enrolled
                                        }
                                    </td>
                                    <td className='uppercase'>
                                        {
                                            item.status
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.status === 'deny' ? item.feedback.feedback : 'No Feedback'
                                        }
                                    </td>
                                    <td className=''>
                                        <Link to={`/dashboard/updateClass/${item._id}`}>
                                            <button
                                                disabled={item.status === 'approve'}
                                                className='text-xl btn bg-yellow-500 text-white hover:bg-yellow-400 border-0'>
                                                <FaEdit></FaEdit>
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

export default MyClass;