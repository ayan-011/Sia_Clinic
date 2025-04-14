import React, { useState } from 'react'

export const Login = () => {

  const [state,setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (

      

     <form className='min-h-[80vh] flex items-center ' action="">
        
        {
        state === "Sign Up"  &&
        <nav className='h-20 text-white items-center justify-center flex border-b-2 border-black  w-full bg-black  absolute top-0'>
         <li><a href="/">Home</a></li>
        </nav>
          }
        {
        state === "Login"  &&
        <nav  className='h-20 text-white items-center justify-center flex border-b-2 border-black  w-full bg-black  absolute top-0'>
         <li><a href="/">Home</a></li>
        </nav>
          }

      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border text-zinc-600 text-sm rounded-xl shadow-2xl  '>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Sign Up" : "log in"}  to book an appointment</p>
      

      {
        state === "Sign Up" && 

      <div className='w-full'> 
      <p>Full Name</p>
      <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name}   />
      </div>
      }
      <div className='w-full'>
      <p>Email</p>
      <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.name)} value={email} />
      </div>
      <div className='w-full'>
      <p>Password</p>
      <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.name)} value={password} />
      </div>
      <button className='bg-zinc-800 text-white w-full py-2 rounded-md text-base  '>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
      { 
        state === "Sign Up"
        ? <p>Already have an account? <span onClick={()=>setState('Login')} className='hover:underline cursor-pointer text-blue-400'>Login here</span> </p>
        : <p>Create an new account?<span onClick={()=>setState('Sign Up')} className='hover:underline cursor-pointer text-blue-400'> click here</span></p>
      }
      </div>
     </form>
  )
}
