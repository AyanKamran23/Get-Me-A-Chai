"use client";
import React from 'react';

import { fetchuser, initiate, fetchpayments } from '../action/useractions';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { updatePayment } from '../action/useractions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({})
    const [showModal, setShowModal] = useState(false)
    const ResolvedUsername = username;
    const [orderId, setOrderId] = useState(null);
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])


    useEffect(() => {
        getData();

    }, [])


    const handlechange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
        console.log(paymentform);

    }
    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentUser(u);
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)

        // Us user ki saari successful payments fetch karne ke liye function
    }
    
    // Function to trigger Safepay checkout
    const pay = async () => {
        let orderId = await initiate(paymentform.amount, username, paymentform);
        if (orderId) {
            setOrderId(orderId);
            setShowModal(true)
            
            
        } else {
            console.error("Data was not save!");
            
        }
        setShowModal(true);

    }
    
    
 // Total amount calculate karne ke liye
    let totalAmount = payments.reduce((a, b) => a + b.amount, 0);
    let totalPaymentsCount = payments.length;

    const success = () => toast.success('Payment Done!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

    });

    const error = () => toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

    });


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTIlOGqqAUyGqog_5tbiC5SJ7WQ8zc75xWdlgkVxLcg&s=10 */}
            <div className="cover w-full bg-gray-50 relative">
                <img className='object-cover w-full h-[300]'
                    src={currentUser?.coverpic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTIlOGqqAUyGqog_5tbiC5SJ7WQ8zc75xWdlgkVxLcg&s=10"} alt="profile bg" />
                <div className='absolute left-[46%] -bottom-14 border-white border-3 rounded-full'>
                    <img width={120} height={120} className='rounded-full' src={currentUser?.profilepic || "/defaultpfp.png"} alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-20 flex-col gap-2">
                <div className="font-bold text-xl">
                    @{ResolvedUsername}
                </div>
                <div className="text-gray-500">
                    Let Help to Get a Chai!
                </div>
                <div className="flex gap-2 justify-center text-gray-400 text-sm md:text-base">
                    <span>{totalPaymentsCount} Payments</span> .
                    <span>{payments.length} posts</span> .
                    <span>${totalAmount} raised</span>
                </div>

                <div className="payment flex gap-3 w-[80%] mt-10">
                    <div className="supporters w-1/2 bg-gray-950 rounded-lg text-white p-10 ">
                        <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                        <ul className='mx-3 '>
                            {payments.length == 0 && <li>No Payments Yet!</li>}
                            {payments.map((p, i) => {
                                return p.done && (
                                    <li key={i} className='my-2 mb-3 text-sm text-gray-300 flex gap-2 items-center'><img width={20} className='bg-gray-300 rounded-full' src="avatar.gif" alt="user " /><span><b>{p.name}</b> donated <b>Rs {p.amount}</b> with a message "{p.message}"</span></li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="makepayment w-1/2 bg-gray-950 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className="flex gap-2 flex-col ">
                            <input type="text" onChange={handlechange} value={paymentform.name || ""} name='name' className='w-full p-2 transition-all duration-300 hover:p-3 hover:border-2 border-gray-300 rounded-lg bg-gray-900 ' placeholder='Enter Name' />
                            <input type="text" onChange={handlechange} value={paymentform.message || ""} name='message' className='w-full p-2 transition-all duration-300 hover:p-3 hover:border-2 border-gray-300 rounded-lg bg-gray-900 ' placeholder='Enter Message' />

                            <div className="flex gap-2">
                                <input type="text" onChange={handlechange} value={paymentform.amount || ""} name='amount' className='w-full p-2 transition-all duration-300 hover:p-3 hover:border-2 border-gray-300 rounded-lg bg-gray-900 ' placeholder='Enter Amount' />
                                <button onClick={() => { pay(paymentform.amount); }} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 6 || paymentform.amount?.length < 1} className=' disabled:text-red-700 disabled:bg-red-600 disabled:from-red-600 w-1/3 px-3 py-1 font-semibold text-white transition-all duration-300 bg-linear-to-r from-purple-800 to-blue-800 rounded-lg shadow-md hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:scale-105 active:scale-95 
                                  '>Pay</button>
                            </div>
                        </div>

                        {/* <div className="flex gap-2 mt-5">
                            <button className="bg-gray-900 p-2 transition-all duration-300 hover:scale-105 hover:border-2 border-gray-300 rounded-lg " onClick={() => setpaymentform({...paymentform, amount:100})}>Pay <b>Rs:100</b></button>
                            <button className="bg-gray-900 p-2 transition-all duration-300 hover:scale-105 hover:border-2 border-gray-300 rounded-lg " onClick={() => setpaymentform({...paymentform, amount:200})}>Pay <b>Rs:200</b></button>
                            <button className="bg-gray-900 p-2 transition-all duration-300 hover:scale-105 hover:border-2 border-gray-300 rounded-lg " onClick={() => setpaymentform({...paymentform, amount:300})}>Pay <b>Rs:300</b></button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Easypaisa Payment Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className=" transition  bg-white text-black p-8 rounded-2xl max-w-md w-full shadow-2xl relative border border-gray-100">

                        {/* Close Cross Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-4 text-gray-400 hover:text-black text-2xl font-light transition-colors"
                        >
                            &times;
                        </button>

                        {/* Top Icon & Title */}
                        <div className="flex flex-col items-center text-center relative">
                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600 absolute -top-12">
                                {/* QR / Payment Icon */}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                                </svg>
                            </div>

                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-1 mt-3">Easypaisa Payment</h2>
                            <p className="text-sm text-gray-500 mb-6">
                                Scan this QR code or send <span className="font-semibold text-gray-800">Rs {paymentform.amount}</span> to the account below.
                            </p>
                        </div>

                        {/* QR Code Container (Aap yahan apni QR image laga sakte hain) */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-center mb-6">
                            <div className="w-40 h-40 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs shadow-inner">
                                <img src="Easypaisa QR code.jpeg" alt="Easypaisa QR" />
                                {/* [ Easypaisa QR Code ] */}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="relative flex py-2 items-center mb-4">
                            <div className="grow border-t border-gray-200"></div>
                            <span className="shrink mx-4 text-xs text-gray-400 uppercase tracking-wider">or enter manually</span>
                            <div className="grow border-t border-gray-200"></div>
                        </div>

                        {/* Manual Account Number Field */}
                        <div className="mb-6">
                            <label className="block text-xs font-medium text-gray-500 mb-1">EASYPAISA ACCOUNT NUMBER</label>
                            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                                <span className="font-mono font-bold text-gray-800 text-base">0311-8274708</span>
                                <button
                                    onClick={() => navigator.clipboard.writeText("03118274708")}
                                    className="text-green-600 hover:text-green-800 text-sm font-medium bg-green-50 px-3 py-1 rounded-md transition-colors"
                                >
                                    Copy
                                </button>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button

                            onClick={async () => {
                                if (orderId) {
                                    await updatePayment(orderId);
                                }
                                setShowModal(false);
                                success();
                            }}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-2"
                        >
                            <span>Done / Close</span>

                        </button>

                    </div>
                </div >

            )}
        </>
    );
};

export default PaymentPage;


export const metadata = {
    title: "Payment Page - Get Me A Chai"
}
// useractions.js mein yeh add karein
export const fetchpay = async (username) => {
    await connectDb();
    // Database se payments nikal kar plain objects mein convert karein
    let payments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean();
    return payments;
}