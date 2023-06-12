import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AddClass = () => {
    const {user} = useAuth()
    return (
        <div className='flex flex-col items-center justify-center py-16'>
            <div className='my-8'>
                <h1 className='text-4xl font-mono font-semibold text-center'>Add New Class</h1>
            </div>
            <div className='w-[80%] mx-auto bg-sky-300 border-2 shadow-md rounded-xl hover:shadow-2xl  px-5 py-4 my-2'>
                <form className='space-y-4 font-semibold'>
                    <div className='flex gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" placeholder="Class Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-accent w-full" />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" placeholder="Instructor Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" placeholder="Instructor Email" className="input input-bordered" />
                        </div>
                    </div>  
                    <div className='flex gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="text" placeholder="Available Seats" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered" />
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