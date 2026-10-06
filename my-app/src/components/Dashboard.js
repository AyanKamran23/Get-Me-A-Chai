"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchuser, updateProfile } from '@/action/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'

const page = () => {
  const { data: session } = useSession()
  const router = useRouter();
  const [form, setform] = useState({})

  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
    
  }, [session, router])
  
  useEffect(() => {
    getData()
  
  }, [])
  

  let getData = async () => {
    if (!session || !session.user)return;
    let u = await fetchuser(session.user.name)
    setform(u)
  }
  

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

const handleSubmit = async (e) => {

  let a = await updateProfile(form, session.user.name)
  
  // toast.success('Profile Updated!', {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
        
  //   });
}
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
      <div className='container mx-auto py-5 px-6 '>
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

        <form className="max-w-2xl mx-auto" action={handleSubmit}>

          <div className='my-2'>
            <label htmlFor="name" className="block mb-1 mt-3 ml-1 text-sm font-bold text-gray-200 dark:text-white">Name :</label>
            <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id="name" className="block w-full p-2 text-gray-100 border border-gray-700 rounded-lg bg-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input for email */}
          <div className="my-2">
            <label htmlFor="email" className="block mb-1 mt-3 ml-1 text-sm font-bold text-gray-200 dark:text-white">Email :</label>
            <input value={form.email ? form.email : ""} onChange={handleChange} type="email" name='email' id="email" className="block w-full p-2 text-gray-100 border border-gray-700 rounded-lg bg-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input forusername */}
          <div className='my-2'>
            <label htmlFor="username" className="block mb-1 mt-3 ml-1 text-sm font-bold text-gray-200 dark:text-white">Username :</label>
            <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-2 text-gray-100 border border-gray-700 rounded-lg bg-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input for profile picture of input type text */}
          <div className="my-2">
            <label htmlFor="profilepic" className="block mb-1 mt-3 ml-1 text-sm font-bold text-gray-200 dark:text-white">Profile Picture :</label>
            <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id="profilepic" className="block w-full p-2 text-gray-100 border border-gray-700 rounded-lg bg-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* input for cover pic  */}
          <div className="my-2">
            <label htmlFor="coverpic" className="block mb-1 mt-3 ml-1 text-sm font-bold text-gray-200 dark:text-white">Cover Picture :</label>
            <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id="coverpic" className="block w-full p-2 text-gray-100 border border-gray-700 rounded-lg bg-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input razorpay id */}
          <div className="my-2">
            <label htmlFor="easypaisaname" className="block mb-1 mt-3 ml-1 text-sm font-bold text-gray-200 dark:text-white">EasyPaisa Name :</label>
            <input value={form.easypaisaname ? form.easypaisaname : ""} onChange={handleChange} type="text" name='easypaisaname' id="easypaisaname" className="block w-full p-2 text-gray-100 border border-gray-700 rounded-lg bg-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input razorpay secret */}
          <div className="my-2">
            <label htmlFor="easypaisanumber" className="block mb-1 mt-3 ml-1 text-sm font-bold text-gray-200 dark:text-white">EasyPaisa Number :</label>
            <input value={form.easypaisanumber ? form.easypaisanumber : ""} onChange={handleChange} type="text" name='easypaisanumber' id="easypaisanumber" className="block w-full p-2 text-gray-100 border border-gray-700 rounded-lg bg-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* Submit Button  */}
          <Link href={`/${form.username}`} >
          <div  className="my-6">
            <button type="submit"  className=" w-full justify-center text-lg flex px-3 items-center gap-1.5 py-1 font-semibold text-white transition-all duration-300 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:scale-105 active:scale-95">Save</button>
          </div>
          </Link>
        </form>


      </div>


    </>
  )
}

export default page
