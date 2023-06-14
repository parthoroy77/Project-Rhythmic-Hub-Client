import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
const PaymentHistory = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: histories = []} = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentHistory?email=${user?.email}`)
            return res.data;
        }
    })
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div>
                <h2 className='text-4xl font-semibold font-mono'>Payment History</h2>
                <div className='divider'></div>
            </div>
            <div>
                <div className="overflow-x-auto border-2  rounded-md px-2 py-4 shadow-lg my-5">
                    <table className="table w-[400px] font-semibold lg:w-[800px]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Transaction Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                histories?.map((history, index) => <tr
                                    key={history._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{history.className}</td>
                                    <td>
                                        {history.instructorName}
                                    </td>
                                    <td>{history.price}</td>
                                    <td>
                                        {
                                            moment().diff(moment(history.date), 'minutes')
                                        } min ago
                                    </td>
                                    <td>
                                        {
                                            history.transactionId
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;