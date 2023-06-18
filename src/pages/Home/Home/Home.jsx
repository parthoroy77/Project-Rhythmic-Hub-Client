import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import ClassesList from '../ClassesList/ClassesList';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>RH | Home</title>
            </Helmet>
            <Banner></Banner>
            <ClassesList></ClassesList>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;