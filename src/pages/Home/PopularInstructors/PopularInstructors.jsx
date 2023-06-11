import React, { useEffect, useState } from 'react';
import PopularInstructorCard from '../../../components/PopularInstructorCard/PopularInstructorCard';
// todo : sorting
const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('classes.json').then(res => res.json()).then(data => setInstructors(data))
    }, [])
    return (
        <div className='my-12'>
            <div className='text-center font-semibold'>
                <h4 className='text-xl mb-2'>Learn from the Best!</h4>
                <h2 className='text-4xl'>Discover Our Renowned Top Instructors</h2>
                <div className="divider"></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    instructors.slice(0,6).map(item => <PopularInstructorCard
                        key={item._id} item={item}
                    ></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;