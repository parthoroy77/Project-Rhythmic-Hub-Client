import React, { useEffect, useState } from 'react';
import PopularClassCard from '../../../components/PopularClassCard/PopularClassCard';

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('classes.json').then(res => res.json()).then(data => setClasses(data))
    }, [])
    return (
        <div className='my-12 '>
            <div className='text-center font-semibold'>
                <h4 className='text-xl mb-2'>Elevate Your Musical Journey!</h4>
                <h2 className='text-4xl'>Explore Our Trending Classes</h2>
                <div className="divider"></div>
            </div>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                {
                    classes.slice(0,6).map(item => <PopularClassCard
                        key={item._id}
                        item={item}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;