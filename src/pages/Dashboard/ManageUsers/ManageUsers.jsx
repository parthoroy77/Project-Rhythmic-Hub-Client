import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const [disable, setDisable] = useState(false);
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/users');
            return res.data;
        }
    })
    const updateRole = (user ,role) => {
        fetch(`http://localhost:5000/users/roleUpdate?id=${user._id}&role=${role}`, {
            method: 'PATCH'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                toast.success(`Role Updated`)
                setDisable(true)
                refetch();
            }
        })
    }
    console.log(users);
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div>
                <h2 className='text-4xl font-semibold font-mono'>All Users</h2>
                <div className='divider'></div>
            </div>
            <div>
                <div className="overflow-x-auto border-2  rounded-md px-2 py-4 shadow-lg my-5">
                    <table className="table w-[400px] lg:w-[800px]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role
                                        }
                                    </td>
                                    <td className='flex flex-col gap-2'>
                                        <button
                                            onClick={()=>updateRole(user, 'admin')}
                                            disabled={user.role !== 'student'}
                                            className='btn btn-xs btn-info'>Make Admin
                                        </button>
                                        <button
                                            onClick={() => updateRole(user, 'instructor')}
                                            disabled={user.role !== 'student'}
                                            className='btn btn-xs btn-accent'>Make Instructor
                                        </button>
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

export default ManageUsers;