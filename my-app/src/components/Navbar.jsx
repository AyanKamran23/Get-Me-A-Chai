"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='bg-gray-950 text-white flex justify-between items-center px-3 h-22 flex-col md:flex-row md:h-12 md:px-6'>

      <Link href={"/"}>
        <div className="logo font-bold text-lg flex gap-1">
          <img width={26} className='InvertImg' src="/tea.gif" alt="" />
          <span>Get Me a Chai! </span>
        </div>
      </Link>


      <div className='flex gap-3'>
        {session && <><button onClick={() => setshowdropdown(!showdropdown)}
         onBlur={() => {
          setTimeout(() => {
            setshowdropdown(false)
          }, 100,)
        }}
         id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio" className="flex px-3 items-center gap-1.5 py-1 font-semibold text-white transition-all duration-300 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:scale-105 active:scale-95" type="button">
          Welcome {session.user.email}
          <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
        </button>

          <div className='relative'>
            <div id="dropdownDelay" className={`z-10 ${showdropdown ? "" : "hidden"} absolute top-10 right-3 bg-gray-800 border border-black rounded-xl shadow-lg w-44`}>
              <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDelayButton">
                <li>
                  <Link href="/dashboard" className="inline-flex items-center w-full p-2  hover:bg-gray-700 hover:text-heading rounded-xl">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded-xl">Your Profile</Link>
                </li>
                <li>
                  <Link onClick={() => signOut()} href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded-xl">Log Out</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
        }


        {!session && <Link href={"/login"}>
          <button className="px-3 py-1 font-semibold text-white transition-all duration-300 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:scale-105 active:scale-95">
            Login
          </button></Link>}
      </div>

    </nav>
  )
}

export default Navbar
