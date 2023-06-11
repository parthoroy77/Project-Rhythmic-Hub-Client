import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
const Home = () => {
    return (
        <div className='px-6 lg:px-24'>
            <Banner></Banner>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;