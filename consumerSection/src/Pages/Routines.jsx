// src/components/Routines.js
import React from 'react';
import Layout from '../components/Layout';
import RoutineCard from '../components/RoutineCard';
import HeadingDiv from '../components/HeadingDiv';
import CreateRoutinePopup from '../components/CreateRoutinePopup';
import ExploreNowCard from '../components/ExploreNowCard'
import SkinCareCard from '../components/SkinCareCard'
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
	const skinCare = [
		{
			image: './SkinCard_1.png',
			title: 'Skin Care Routine',
			whatdo: '(Acne Reduction)',
			duration: '12 Weeks',
			weeks: '12',
			reminders: '3',
		},
		{
			image: './SkinCard_2.png',
			title: 'Skin Care Routine ',
			whatdo: '(Skin Glow)',
			duration: '6 Weeks',
			weeks: '6',
			reminders: '3',
		},
	];
	const exploreNow = [
		{
			image: './LadyExploreCard.png',
			title: 'Skin Care Routine',
			subTitle: 'Glass Skin',
			exploreLink: "",

		},
		{
			image: './LadyExploreCard.png',
			title: 'Skin Care Routine',
			subTitle: 'Glass Skin',
			exploreLink: "",

		},

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
						<div key={index} className="flex justify-between items-center mb-4 ">
							<div className='flexClass'>

								<img src={routine.image} alt="" className='mr-4' />

								<div className=" flex justify-start items-start flex-col">
									<h3 className="text-sm md:text-lg font-semibold mr-4">{routine.title}</h3>
									<p className="text-sm text-gray-500">{routine.type} &nbsp;  {routine.time}</p>
								</div>

							</div>
							<div className="flex justify-center items-center flex-col md:flex-row">
								<span className=" text-sm font-semibold py-1  rounded-lg md:mr-4 ">{routine.progress} 🌻</span>
								<span className=" text-sm font-semibold py-1  rounded-lg"><img src="./rightArrow.svg" alt="" className='w-[20px] h-auto ' /></span>
							</div>
						</div>
					))}
					<p className="text-gray-500 cursor-pointer w-full flex justify-between items-center"><span>More Routines (2)</span> <span><img src="./downArrow.svg" alt="" className='w-[20px] h-auto' /></span></p>
				</div>

				<div className='p-4 '>
					<h2 className="text-xl font-semibold text-black mb-4">My Routine</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:justify-start ">
						{myRoutines.map((routine, index) => (
							<RoutineCard key={index} {...routine} />
						))}
					</div>
				</div>
				<div className="p-4  w-full ">

					<div className="flex justify-between items-center mb-6 w-full ">
						<h1 className="text-2xl font-semibold text-gray-800">Explore</h1>
						<button className="text-green-700 hover:underline">See More</button>
					</div>

					<div className="flex mb-6 flex-wrap justify-start items-start">
						<button className="bg-[#E7F5E7] text-green-700 px-4 py-2 rounded-xl m-1">All Routines</button>
						<button className="border-2 border-slate-200 text-gray-700 px-4 py-2 rounded-xl m-1">Created by Dr.</button>
						<button className="border-2 border-slate-200 text-gray-700 px-4 py-2 rounded-xl m-1">Created by me</button>
						<button className="border-2 border-slate-200 text-gray-700 px-4 py-2 rounded-xl m-1">Imported Template</button>
					</div>

					<div className="flex gap-3 justify-center items-center mb-6 flex-wrap md:justify-start">
						{exploreNow.map((card, index) => (
							<ExploreNowCard key={index} {...card} />
						))}
					</div>

					<div className=" flex  justify-center items-center mb-6  md:justify-start ">
						{skinCare.map((card, index) => (
							<SkinCareCard key={index} {...card} />
						))}
					</div>
				</div>
			</HeadingDiv>
		</Layout>
	);
};

export default Routines;
