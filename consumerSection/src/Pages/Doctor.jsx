import React,{useState} from 'react'
import DoctorAppointmentModalOne from '../components/DoctorOTP'
import AppointmentFeeForm from './AppointmentBookingPage';
import DoctorOTP from '../components/DoctorOTP';
const Doctor = () => {
    // const [currentPopup, setCurrentPopup] = useState(1);

    
    return (
        <div className="flex-grow p-4 mt-8  w-[100%]  sm:w-[100%] xl:w-[80%] ">
            {/* <DoctorOTP /> */}
            {/* {currentPopup === 1 && <DoctorAppointmentModalOne  />} */}
            {/* {currentPopup === 2 && <AppointmentFeeForm/>} */}
            
            
            {/* <div className="bg-white rounded-3xl overflow-hidden shadow border-2 border-slate-200 min-h-[50vh] flex justify-start items-center flex-col  ">
                <h2 className="text-2xl font-semibold mb-4 p-6 bg-[#F7FCFA] text-[--primary] w-full ">
                    Doctor Appointment
                </h2>
                <button className='bg-[--primary] p-4 text-white  rounded-lg text-center ' onClick={() => setCurrentPopup(1)}>Book Appointment </button>
            </div> */}



        </div>
    )
}

export default Doctor