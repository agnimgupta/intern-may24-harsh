// src/components/Modal.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const CreateRoutinePopup = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg p-6 shadow-lg w-[400px]">
				<div className="flex justify-end">
					<button className="text-gray-700" onClick={onClose}>
						<span className="material-icons"><img src="./Close.svg" alt="" className='icons' /></span>
					</button>
				</div>
				<div className="flex justify-center items-center flex-col mt-8 ">
					<NavLink to="/routines/create-routine" className="bg-[--primary] text-white px-4 py-2 rounded-md mb-8 hover:bg-green-700">
						Create New Routine
					</NavLink>
					<div>
						<p className="text-md text-gray-700 mb-2 ">
							&#9679; Your own personalized routine
						</p>
						<p className="text-md text-gray-700 mb-2">
							&#9679; Add up to 7 reminders
						</p>

					</div>
					
					<div className="flex items-center justify-center mb-4  w-[60%]">
						<hr className="flex-grow border-t border-gray-300" />
						<span className="px-3 text-gray-700">OR</span>
						<hr className="flex-grow border-t border-gray-300" />
					</div>
					<button className="w-full bg-white border border-[--primary] text-gray-700 px-4 py-2 rounded-md mb-4 hover:bg-gray-50">
						Import from Templates
					</button>
					<div>
						<p className="text-md text-gray-700 mb-2 ">
							&#9679; Multiple templates created by us
						</p>
						<p className="text-md text-gray-700 mb-2">
							&#9679; Customize according to your need
						</p>

					</div>
					
					<a href="#" className="text-[--primary] hover:underline mt-6 font-bold underline">
						View Sample Templates
					</a>
				</div>
			</div>
		</div>
	);
};

export default CreateRoutinePopup;
