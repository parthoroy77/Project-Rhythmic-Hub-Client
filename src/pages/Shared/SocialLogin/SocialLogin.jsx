import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const handleGoogleLogin = () => {
        googleLogin().then(result => {
            const loggedUser = result.user;
            const user = { name: loggedUser.displayName, email: loggedUser.email, role: 'student' };
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify(user)
            }).then(res => res.json()).then(data => {
                toast.success('Login Successfully')
            })
        }).catch(err => toast.error(err.message))
    }
    return (
        <>
            <div className='flex gap-4 justify-center'>
                <button onClick={handleGoogleLogin} className='btn w-2/4 btn-info flex items-center'>
                    <FaGoogle></FaGoogle> <span>Sign In</span>
                </button>
            </div>   
        </>
    );
};

export default SocialLogin;