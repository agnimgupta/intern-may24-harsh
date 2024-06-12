import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(phone, otp)) {
      alert("Login successful!");
    } else {
      alert("Login failed!");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Sign up logic here
    alert("Sign up logic not implemented yet.");
  };

  return (
    <div className="my-[3rem] flex flex-col md:flex-row w-[100%]">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100">
        <img 
          src={isLogin ? "/LoginBanner.png" : "/SignUpBanner.png"}
          alt="Decorative" 
          className="object-cover h-full w-full"
        />
      </div>
      
      {/* Right Side - Login/Signup Form */}
      <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex mb-6">
            <img src="/Logo_2.png" alt="Amrutam Logo" className="w-[80px] h-auto" />
          </div>

          <h2 className="text-2xl font-semibold mb-6">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          
          <p className='text-gray-600'>
            {isLogin 
              ? 'Please provide your registered phone number for SMS OTP.' 
              : 'Please fill in the details to create an account.'}
          </p>

          <form onSubmit={isLogin ? handleLogin : handleSignUp}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 text-gray-600 text-sm rounded-l-md">
                  +91
                </span>
                <input 
                  type="text" 
                  className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {!isLogin && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" 
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Create Password</label>
                  <input 
                    type="password" 
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </>
            )}

            {isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">OTP</label>
                <input 
                  type="text" 
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" 
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}

            <button 
              type="submit" 
              className="w-full bg-[--primary] text-white py-2 rounded-md"
            >
              {isLogin ? 'Send OTP' : 'Sign Up'}
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              {isLogin 
                ? "Don't have an account? " 
                : "Already have an account? "}
              <button 
                onClick={toggleForm} 
                className="text-[--primary] underline"
              >
                {isLogin ? 'Sign up here' : 'Login here'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
