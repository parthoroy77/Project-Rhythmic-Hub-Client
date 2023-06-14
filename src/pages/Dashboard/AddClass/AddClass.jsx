import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';


const apiKey = import.meta.env.VITE_IMG_API_KEY;
const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const hostingURL = `https://api.imgbb.com/1/upload?key=${apiKey}`
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(hostingURL, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(imgRes => {
            if (imgRes.success) {
                const userImg = user.photoURL
                const imgURL = imgRes.data.display_url;
                const { name, image, availableSeats, price } = data;
                const newClass = {
                    className: name, classImg: imgURL,
                    instructorName: user.displayName,
                    instructorEmail: user.email,
                    instructorImg: userImg,
                    price: parseFloat(price),
                    availableSeats: parseFloat(availableSeats),
                    enrolled: 0, status: 'pending'
                }
                fetch('http://localhost:5000/classes', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newClass)
                }).then(res => res.json()).then(data => {
                    if (data.insertedId) {
                        toast.success('Class Added Successfully')
                        reset()
                    }
                })
            }
        })
    }
    return (
        <div className='flex flex-col items-center justify-center py-16'>
            <div className='my-6'>
                <h1 className='text-4xl font-mono font-semibold text-center'>Add New Class</h1>
                <div className='divider mb-0'></div>
            </div>
            <div className='w-[80%] mx-auto bg-sky-400 border-2 border-sky-400 shadow-md rounded-xl   px-5 py-4 my-2'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 font-semibold'>
                    <div className='flex gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text"
                                {...register('name', { required: true })}
                                placeholder="Class Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file"
                                {...register('image', { required: true })}
                                className="file-input file-input-bordered file-input-accent w-full" />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text"
                                readOnly defaultValue={user?.displayName} placeholder="Instructor Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" placeholder="Instructor Email"
                                readOnly defaultValue={user?.email} className="input input-bordered" />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number"
                                {...register('availableSeats', { required: true })}
                                placeholder="Available Seats" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"
                                {...register('price', { required: true })}
                                placeholder="Price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='text-center'>
                        <input type="submit" value="Add Class" className='btn btn-accent w-1/3' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;