import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from './../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const {openSignIn} = useClerk();
  const {isSignedIn,user} = useUser()
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to={'/'}>
        <img src={assets.logo} alt="logo" className='sm:w-44  w-32' />
      </Link>
      {
        isSignedIn ? <div>
          <UserButton/>
        </div> : <button 
      onClick={()=>openSignIn({})}
      className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 text-sm rounded-full'>
        Get started
        <img src={assets.arrow_icon} alt="" className='sm:w-4 w-3' />
      </button>
      }
    </div>
  )
}

export default Navbar
