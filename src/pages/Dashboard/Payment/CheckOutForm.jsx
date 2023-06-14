import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    PaymentElement, Elements, useStripe, useElements, CardElement,
} from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
const CheckOutForm = ({ paymentItem }) => {
    const stripe = useStripe();
    const { user } = useAuth()
    const elements = useElements();
    const { _id, price, className, instructorName, classId, classImg } = paymentItem;
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)
    const [axiosSecure] = useAxiosSecure()
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            toast.error(error.message)
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Unknown',
                        email: user?.email || 'Unknown'
                    }
                }
            }
        )

        if (confirmError) {
            toast.error(error.message)
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;
            const savedPayment = {
                email: user?.email, transactionId: paymentIntent.id, price, _id, className, classImg,instructorName, classId,
                date: new Date()
            }
            axiosSecure.post('/payment', { savedPayment })
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedResult.insertedId && res.data.deletedResult.deletedCount > 0 && res.data.updatedResult.modifiedCount > 0) {
                        toast.success(`Payment Success full transactionId: ${transactionId}`)
                    }
                })
        }

    }
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price])
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center my-6'>
                    <button type="submit" className='btn btn-primary w-1/3'
                        disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
        </>
    );
};

export default CheckOutForm;