import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import ClassesList from '../ClassesList/ClassesList';
const Home = () => {
    return (
        <div className='px-6 lg:px-24'>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <ClassesList></ClassesList>
        </div>
    );
};

export default Home;