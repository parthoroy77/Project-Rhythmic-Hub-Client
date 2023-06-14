import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    const location = useLocation()
    const paymentItem = location?.state?.item;
    return (
        <div className='flex flex-col items-center justify-center py-16'>
            <div>
                <div className='my-6'>
                    <h1 className='text-4xl font-mono font-semibold text-center'>Pay Now!</h1>
                    <div className='divider mb-0'></div>
                </div>
            </div>
            <div className='w-[60%] my-5'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm paymentItem={paymentItem}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;