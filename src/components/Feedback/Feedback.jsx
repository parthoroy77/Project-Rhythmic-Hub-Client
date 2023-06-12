import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Feedback = () => {
    const {id} = useParams()
    const [feedback, setFeedback] = useState('');
    const handleFeedback = () => {
        fetch(`http://localhost:5000/classes/feedback?id=${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ feedback})
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Feedback Sent')
            }
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-1/2'>
                <div className='my-6'>
                    <h1 className='text-4xl font-mono font-semibold text-center'>Give Feedback</h1>
                    <div className='divider mb-0'></div>
                </div>
                <div>
                    <textarea onBlur={(e)=>setFeedback(e.target.value)} className="textarea textarea-accent h-[200px] w-full" placeholder="Feedback"></textarea>
                    <button onClick={handleFeedback} className='w-full btn btn-accent'>Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;