import React, { useEffect, useState } from 'react';
import PopularInstructorCard from '../../../components/PopularInstructorCard/PopularInstructorCard';
import { useQuery } from '@tanstack/react-query';
// todo : sorting
const PopularInstructors = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructor');
            return res.json()
        }
    })
    console.log(instructors);
    return (
        <div className='my-12'>
            <div className='text-center font-semibold'>
                <h4 className='text-xl mb-2'>Learn from the Best!</h4>
                <h2 className='text-4xl'>Discover Our Renowned Top Instructors</h2>
                <div className="divider"></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    instructors.map(item => <PopularInstructorCard
                        key={item._id} item={item}
                    ></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;