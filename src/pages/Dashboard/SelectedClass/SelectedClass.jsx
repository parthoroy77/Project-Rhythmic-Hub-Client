import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaBuysellads, FaTrash, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: selectedClass = [], refetch } = useQuery({
        queryKey: ['selectedClass'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClass?email=${user?.email}`)
            return res.data;
        }
    })
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteClass?id=${id}`, { method: 'DELETE' }).then(res => res.json()).then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        refetch()
                    }
                })

            }
        })

    }
    return (
        <div className='flex flex-col items-center justify-center py-16'>
            <div className='my-6'>
                <h1 className='text-4xl font-mono font-semibold text-center'>Manage Classes</h1>
                <div className='divider mb-0'></div>
            </div>
            <div>
                <div className="overflow-x-auto border-2  rounded-md px-2 py-4 shadow-lg my-5">
                    <table className="table lg:w-[800px] w-[400px] font-semibold">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th>Pay Now</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClass?.map((item, index) => <tr
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
                                            item.instructorName
                                        }
                                    </td>
                                    <td className='uppercase text-right'>
                                        ${
                                            item.price
                                        }
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/payment`} state={{item: item}}>
                                            <button
                                                className='btn bg-green-500 hover:bg-green-400 border-0'>
                                                PAY
                                            </button>
                                        </Link>
                                    </td>
                                    <td className=''>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className='btn text-xl text-white bg-red-600 hover:bg-red-500 border-0'>
                                            <FaTrashAlt></FaTrashAlt>
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

export default SelectedClass;