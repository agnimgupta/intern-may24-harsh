// src/components/Popup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


const DoctorOTP = () => {
  const navigate = useNavigate();
  const otpLogic = () => {
    console.log("in");
    navigate("/appointment-booking")
  }
  return (
    <div className=" flex items-center justify-center  z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <div className="flex mb-6">

          <img src="/Logo_2.png" alt="Amrutam Logo" className="w-24" />

        </div>

        <h2 className=" text-lg font-semibold mb-4">Please sign up to secure your appointment</h2>
        <form className="space-y-4">
          <label className="block text-sm font-medium">
            Phone <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border rounded-md p-2">
            <span className="pr-2">🇮🇳 +91</span>
            <input type="tel" className="flex-1 focus:outline-none" />
          </div>
          <button type="button" className="w-full py-2 bg-[--primary] text-white rounded-md mt-4 " onClick={() => otpLogic()}>
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorOTP;
