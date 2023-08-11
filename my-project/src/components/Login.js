import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
    <div className="flex min-h-screen items-center justify-center bg-[#1F4C91]">
        <div className="wrapper bg-white p-8 rounded-xl shadow-md max-w-[55vh] w-full font-medium">
            <h2 className="relative text-md font-semibold text-gray-800 mb-4 ">
            Login to your account
            </h2>
            <form>
            <div className="mb-4 flex flex-col items-start">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" placeholder="Enter your email" className="mt-1 p-2 w-full border rounded-sm" />
            </div>
            <div className="mb-4 flex flex-col items-start">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" id="password" placeholder="Create password" className="mt-1 p-2 w-full border rounded-sm" />
            </div>
            
            <div className="mb-4 flex  items-start">
                <input type="checkbox" id='remember-me' className="my-auto mr-1" ></input>
                <label htmlFor='remember-me'>Remember Me</label>
            </div>

        <div className="submit-btn">
            <button className="w-full p-2 bg-[#1F4C91] text-white rounded-sm hover:bg-blue-600 transition duration-300 ease-in-out">Login</button>
        </div>

        <div className='flex justify-center mt-5 '>
            <p>New to MyApp?
            <span>
                <Link to="/Login">Sign Up</Link>
            </span>
            </p> 
        </div>
      </form>
        </div>
    </div>
    );
};

export default Login;
