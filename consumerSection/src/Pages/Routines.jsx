// src/components/Routines.js
import React from 'react';
import Layout from '../components/Layout';
import RoutineCard from '../components/RoutineCard';
import RoutineExplore from '../components/RoutineExplore';
import HeadingDiv from '../components/HeadingDiv';
import CreateRoutinePopup from '../components/CreateRoutinePopup';
import { useState } from 'react';
const Routines = () => {

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const todayRoutines = [
		{
			image: './DrinkWater.png',
			title: 'Drinking Water',
			type: 'Consumable',
			time: '09:30 AM',
			progress: 8
		},
		{
			image: './HairSpa.png',
			title: 'Amrutam Kuntal Care Hair Spa',
			type: 'Application Based',
			time: '09:30 AM',
			progress: 14
		}
	];

	const myRoutines = [
		{
			image: './Mountain.png',
			title: 'Focus & Work',
			reminders: 3,
			progress: 80,
			finished: true
		},
		{
			image: './TwoLady.png',
			title: 'Skin Care Routine',
			reminders: 3,
			progress: 40,
			finished: false
		}
	];

	return (

		<Layout>

			<div className="flex justify-between items-center flex-col mb-6 bg-[#FFF7E2] px-4 py-4 rounded-lg lg:p-8 md:flex-row w-full ">
				<div className="flex flex-col">

					<h1 className="text-2xl font-semibold text-[--primary] mb-4">What's a routine?</h1>
					<p className=" text-gray-700 rounded-lg mb-6 w-[90%] md:w-[90%] ">
						Routines are personalized health plans provided by your doctor, or created by you including medicines, diet, exercise, and self-care habits tailored to your needs.
					</p>

				</div>
				<button className="bg-[--primary] text-white py-2 px-4 rounded-lg w-[70%] md:w-[50%]" onClick={() => setIsPopupOpen(true)}>Create a routine +</button>
			</div>
			
			<CreateRoutinePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

			

				<HeadingDiv title="Routines">

					<div className="p-4 border-y-2 border-slate-200  ">
						<h2 className="text-xl font-semibold text-black ">Today's Routines</h2>
						<p className="text-gray-500 mb-4">You have 4 Routines remaining for the day</p>
						{todayRoutines.map((routine, index) => (
							<div key={index} className="flex justify-between items-center mb-4">
								<div className='flexClass'>

									<img src={routine.image} alt="" className='mr-4' />

									<div className=" flex justify-start items-start flex-col">
										<h3 className="text-lg font-semibold mr-4">{routine.title}</h3>
										<p className="text-sm text-gray-500">{routine.type} &nbsp;  {routine.time}</p>
									</div>

								</div>
								<div className="flexClass">
									<span className=" text-sm font-semibold py-1 px-3 rounded-lg mr-4">{routine.progress} 🌻</span>
									<span className=" text-sm font-semibold py-1 px-3 rounded-lg"><img src="./rightArrow.svg" alt="" className='icons ' /></span>
								</div>
							</div>
						))}
						<p className="text-green-700 cursor-pointer">More Routines (2)</p>
					</div>

					<div className='p-4 '>
						<h2 className="text-xl font-semibold text-black mb-4">My Routine</h2>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:justify-start">
							{myRoutines.map((routine, index) => (
								<RoutineCard key={index} {...routine} />
							))}
						</div>
					</div>
					<RoutineExplore />
				</HeadingDiv>
		</Layout>
	);
};

export default Routines;
