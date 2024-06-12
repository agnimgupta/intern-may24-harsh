import React, { useState } from 'react';
import Layout from './Layout';
import HeadingDiv from './HeadingDiv';
import InputBox from './InputBox';
const ActivityAndProductBased = ({ type, onNext, activityDetails, setActivityDetails, onBack }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setActivityDetails(prevDetails => ({ ...prevDetails, [name]: value }));

	};

	return (


		<Layout>
			<HeadingDiv title={type === 'Product based' ? 'Product Based Reminders' : 'Activity Based Reminders'}>

				<div className="wrapperDiv p-6 ">

					<h3 className="text-lg mb-4 font-bold">{type === 'Product based' ? 'Enter Product Details' : 'Enter Activity Details'}</h3>

					<div className="flex w-[100%] justify-start items-start flex-col md:flex-row">

						<div className="flex justify-start items-start w-[100%]  m:w-[50%]  flex-col ">

							<div className='w-[90%] mb-5 '>
								<label className="block text-sm mb-2"> {type === 'Product based' ? 'Product Name' : 'Activity Name'}</label>

								<input
									type="text"
									name="name"
									value={activityDetails.name}
									onChange={handleChange}
									className="border rounded-lg w-full p-2 outline-none"
								/>
								
							</div>

							<div className="grid grid-cols-2 gap-2  w-[90%] mb-5">
								<div>
									<label className="block text-sm mb-2">{type === 'Product based' ? 'Quantity' : 'Goal'}</label>
									<input
										type="number"
										name="goal"
										value={activityDetails.goal}
										onChange={handleChange}
										className="border rounded-lg w-full p-2 outline-none"
									/>
								</div>

								<div>
									<label className="block text-sm mb-2">Unit</label>
									<input
										type="text"
										name="unit"
										value={activityDetails.unit}
										onChange={handleChange}
										className="border rounded-lg w-full p-2 outline-none"
									/>
								</div>
							</div>


						</div>

						<div className="flex justify-start items-start w-[100%]  md:w-[50%]  flex-col min-h-[30vh]  md:min-h-[40vh]">

							<div className='w-[90%] mb-5'>
								<div>
									<label className="block text-sm mb-2">{type === 'Product based' ? 'Product Type' : 'Activity Type'}</label>
									<input
										type="text"
										name="type"
										value={activityDetails.type}
										onChange={handleChange}
										className="border rounded-lg w-full p-2 outline-none"
									/>
								</div>
							</div>


							<div className="mb-5">
								<label className="block text-sm mb-2">Frequency</label>
								<div className="flex items-center">
									<input
										type="radio"
										name="frequency"
										value="Daily"
										checked={activityDetails.frequency === 'Daily'}
										onChange={handleChange}
										className="mr-2"
									/>
									<label className="mr-4">Daily</label>
									<input
										type="radio"
										name="frequency"
										value="Custom Days"
										checked={activityDetails.frequency === 'Custom Days'}
										onChange={handleChange}
										className="mr-2"
									/>
									<label>Custom Days</label>
								</div>
							</div>
							{activityDetails.frequency === 'Custom Days' && (
								<div className="flex flex-wrap justify-start items-center gap-2  mb-4 bg-[#E9F1E0] p-4 rounded-lg h-auto">
									{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
										<button
											key={day}
											type="button"
											className={`px-4 py-2 rounded-lg ${activityDetails.customDays.includes(day) ? 'bg-[--primary] text-white' : 'text-gray-600'}`}
											onClick={() => {
												setActivityDetails(prevDetails => ({
													...prevDetails,
													customDays: prevDetails.customDays.includes(day)
														? prevDetails.customDays.filter(d => d !== day)
														: [...prevDetails.customDays, day]
												}));
											}}
										>
											{day}
										</button>
									))}
								</div>
							)}

						</div>
					</div>

					<div className="flex space-x-4  justify-center items-center">
						<button
							onClick={onBack}
							className="bg-gray-600 text-white  px-[4rem] py-2 rounded-lg ]"
						>
							Back
						</button>
						<button
							onClick={onNext}
							className="bg-[--primary] text-white px-[4rem] py-2 rounded-lg"
						>
							Next
						</button>
					</div>
				</div>
			</HeadingDiv>

		</Layout>
	);
};

export default ActivityAndProductBased;
