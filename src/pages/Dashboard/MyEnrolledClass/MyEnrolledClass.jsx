import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const MyEnrolledClass = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: enrolledClass = []} = useQuery({
        queryKey: ['enrolledClass'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            return res.data
        }
    })
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div>
                <h2 className='text-4xl font-semibold font-mono'>My Enrolled Class</h2>
                <div className='divider'></div>
            </div>
            <div>
                <div className="overflow-x-auto border-2  rounded-md px-2 py-4 shadow-lg my-5">
                    <table className="table w-[400px] lg:w-[800px]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolledClass?.map((item, index) => <tr
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
                                    <td>{item.instructorName}</td>
                                    <td>
                                        {
                                            item.price
                                        }
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

export default MyEnrolledClass;