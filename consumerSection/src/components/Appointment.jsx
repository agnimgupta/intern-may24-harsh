import AppointmentCard from './AppointmentCard';
import { useState } from 'react';
import BookAppointmentBanner from './BookAppointmentBanner';
const Appointments = () => {
    const [tab, setTab] = useState('Upcoming Appointments');

    const doctors = [
        {
            name: 'Prerna Narang',
            specialty: 'Gynecologist',
            date: 'Wed 28th Feb, 9:30 AM',
            consultationType: 'Video consultation',
            fee: '800',
            image: '/AppointmentDoctor_1.png'
        },
        {
            name: 'Prerna Narang',
            specialty: 'Gynecologist',
            date: 'Wed 28th Feb, 9:30 AM',
            consultationType: 'Video consultation',
            fee: '800',
            image: '/AppointmentDoctor_2.png'
        },
        {
            name: 'Prerna Narang',
            specialty: 'Gynecologist',
            date: 'Wed 28th Feb, 9:30 AM',
            consultationType: 'Video consultation',
            fee: '800',
            image: '/AppointmentDoctor_1.png'
        }
    ];

    return (
        <div className='w-full overflow-hidden my-6 p-4'>
            <BookAppointmentBanner />
            <div className=" ">
                <div className="flex justify-center mb-4 my-4 bg-white px-4 border rounded-lg  w-full m:w-[100%] xl:w-[90%]">
                    <img src="/Search.svg" alt="" className='w-[30px] h-[auto] object-contain' />
                    <input
                        type="text"
                        placeholder="Search"
                        className="py-3 px-4 outline-none  w-full"
                    />
                </div>

                <div className="flex justify-center items-center flex-col border border-gray-300 overflow-hidden rounded-xl  w-full m:w-[100%] xl:w-[90%]">

                    <div className="flex justify-center border-b mb-4 bg-[#F7FCFA] w-full p-3 pb-0">

                        <button
                            className={`px-4 py-2 ${tab === 'Upcoming Appointments' ? 'border-b-2 border-[--primary]' : ''}`}
                            onClick={() => setTab('Upcoming Appointments')}
                        >
                            Upcoming Appointments
                        </button>
                        <button
                            className={`px-4 py-2 ${tab === 'Past Appointments' ? 'border-b-2 border-[--primary]' : ''}`}
                            onClick={() => setTab('Past Appointments')}
                        >
                            Past Appointments
                        </button>

                    </div>

                    <div className="flex flex-wrap justify-center p-3">
                        {doctors.map((doctor, index) => (
                            <AppointmentCard key={index} doctor={doctor} status={index === 1 ? 'Cancelled' : ''} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;