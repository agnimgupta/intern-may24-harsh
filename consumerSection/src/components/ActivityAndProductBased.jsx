import React, { useState } from 'react';
import Layout from './Layout';
import HeadingDiv from './HeadingDiv';
import InputBox from './InputBox';
import SimpleDropDownComponent from './SimpleDropDown';
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

					<div className="flex w-[100%] justify-start items-start flex-col xl:flex-row">

						<div className="flex justify-start items-start w-[100%]  md:w-[100%]  flex-col md:m-3">

							<div className='w-full mb-5 '>
								<SimpleDropDownComponent label={type === 'Product based' ? 'Product Name' : 'Activity Name'} />
							</div>

							<div className="grid grid-cols-2 gap-2  w-full mb-5">
									
								<InputBox label={type === 'Product based' ? 'Quantity' : 'Goal'}/>
								<InputBox label="Unit"/>

								
							</div>


						</div>

						<div className="flex justify-start items-start w-[100%]  md:w-[100%]  flex-col  md:m-3 ">

							<div className='w-[100%] mb-5'>
							<SimpleDropDownComponent label={type === 'Product based' ? 'Product Type' : 'Activity Type'} />

							</div>


							<div className="mb-5">
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
