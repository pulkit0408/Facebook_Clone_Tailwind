import React from 'react'

function App() {
  return (
    <>
     <div className="container mt-48 flex items-center justify-center mx-auto">
      <div className="left w-1/3 mx-14">
        <img className='w-80' src="facebook.svg" alt="" />
        <p className='text-3xl mx-8'>Facebook helps you connect and share with the people in your life.</p>
      </div>

      <div className="right h-auto p-9 bg-white flex flex-col rounded-xl text-lg w-1/4 relative">
        <input className='px-4 h-12 my-2 border-2 border-gray-100 rounded-md outline-blue-600' type="text" placeholder='Email address or phone number' />
        <input className='px-4 h-12 my-2 border-2 border-gray-100 rounded-md outline-blue-600' type="password" placeholder='Password' />
        <button className='bg-blue-600 text-white rounded-md my-2 py-3 font-bold hover:bg-blue-700 hover:cursor-pointer'>Log In</button>
        <span className='text-center text-sm my-2 text-blue-600 mt-3 hover:cursor-pointer hover:underline'>Forgotten Password?</span>
        <hr className='my-2'/>
        <button className='bg-green-600 my-2 text-white rounded-md py-3 px-4 mx-auto text-xl hover:bg-green-700 hover:cursor-pointer w-fit'>Create New Account</button>
        <span className="absolute -bottom-12 text-sm"><span className="font-bold hover:underline hover:cursor-pointer">Create a page </span>for a celebrity, brand or business.</span>
      </div>
     </div>
    </>
  )
}

export default App