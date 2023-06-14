import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassCard from '../../components/ClassCard/ClassCard';
import InstructorCard from '../../components/InstructorCard/InstructorCard';

const Instructors = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json()
        }
    })
    return (
        <div className='px-4 lg:px-24  my-16'>
            <div className=' mx-auto text-center'>
                <h2 className='text-3xl font-semibold font-mono'>
                    Meet Our Expert Instructors <br /> Guiding You Towards Success
                </h2>
                <div className="divider mx-auto w-[50%]"></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;