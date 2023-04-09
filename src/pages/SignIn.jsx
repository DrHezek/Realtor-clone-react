import React, { useState } from 'react';
// import { Prev } from 'react-bootstrap/esm/PageItem';
import {AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../Component/OAuth';

export default function SignIn() {
  const [formData, setFormData] =useState({
    email:"",
    password:"",
  });
  const [showPassword, setShowPassWord]= useState(false)

const {email, password}=formData;
function onChange(e){
  setFormData((prevState)=>({
    ...prevState,
    [e.target.id]:e.target.value,
  }))
}


  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center 
         px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img 
          src='https://media.istockphoto.com/id/1208761953/photo/cropped-shot-of-real-estate-agent-or-banker-giving-a-house-key-to-buyer.jpg?s=612x612&w=0&k=20&c=p5J1U7NQ1YGS4ugK4gC0tVcUasH0Wf3QI2FZJn-gFrQ=' 
          alt='key'
          className='w-full rounded-2xl'
          ></img>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form >
            <input className='mb-6 w-full px-4 py-2 text-xl text-gray-700 
            bg-white border-gray-300 rounded transition ease-in-out' 
            type="email" id='email' 
            value={email}
            onChange={onChange}
            placeholder='Email address'>
            </input>
            <div className="relative mb-6">
            <input className='w-full px-4 py-2 text-xl text-gray-700 
            bg-white border-gray-300 rounded transition ease-in-out' 
            type={showPassword?"text":"password"} 
            id="password" 
            value={password}
            onChange={onChange}
            placeholder='Password'></input>
            {showPassword ? (<AiFillEyeInvisible 
            className='absolute right-3 top-3 text-xl cursor-pointer'
            onClick={()=>setShowPassWord((prevState)=>!prevState)}
            /> ): 
            (<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer'
              onClick={()=>setShowPassWord((prevState)=>!prevState)}
            />)}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Don't have an account?
              <Link 
              className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'
              to={"/sign-up"}> Register</Link>
              </p>
              <p >
                <Link 
                className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                to={"/forgot-password"}>Forgot Password?</Link>
              </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 
          tex-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 
          transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' 
          type='submit'> Sign in
          </button>
          <div className=' flex items-center my-4 before:border-t before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300
          '>
            <p className='text-center font-semibold mx-4' >OR</p>
          </div>
            
          <OAuth/>
          </form>

         
        </div>
      </div>
    </section>  
  )
}
