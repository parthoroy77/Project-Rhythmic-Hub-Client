import React, { useEffect, useState } from 'react';
import PopularClassCard from '../../../components/PopularClassCard/PopularClassCard';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://rhythmic-hub-server.vercel.app/popularClasses');
            return res.json()
        }
    })
    return (
        <div className='my-12 '>
            <div className='text-center font-semibold'>
                <h4 className='text-xl mb-2'>Elevate Your Musical Journey!</h4>
                <h2 className='text-4xl'>Explore Our Trending Classes</h2>
                <div className="divider"></div>
            </div>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                {
                    classes.filter(items => items.status === 'approve').slice(0, 6).map(item => <PopularClassCard
                        key={item._id}
                        item={item}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;