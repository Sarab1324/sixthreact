import { useState } from "react"
import React  from 'react'
import { useNavigate, Outlet } from "react-router-dom"

const Signin = () => {
    const navigate = useNavigate()

    const SignIn = (e) =>{
        e.preventDefault()

        navigate('/signin/profile')

    }


  return (
    <>
    <div className="container w-50 my-5">
         <form onSubmit={SignIn}>
            <input type="text" className='form-control my-3' placeholder='@username' />
            <input type="text" className='form-control my-3' placeholder='*****' />
            <button className='btn btn-primary w-25'>Sign in</button>
            <button onClick={()=> navigate('/signin/user')} type="button" className='btn btn-primary w-25'>go to user</button>
        </form>
    </div>
    <hr />
    <Outlet />
    </>
  )
}

export default Signin