import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassCard from '../../components/ClassCard/ClassCard';

const Classes = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json()
        }
    })
    return (
        <div className='px-4 lg:px-24'>
            <div className=' mx-auto text-center'>
                <h2 className='text-3xl'>
                    Unveiling the Melodic Journey of Our Musical Class
                </h2>
                <div className="divider mx-auto w-[50%]"></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-10'>
                {
                    classes.filter(items => items.status === 'approve').map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;