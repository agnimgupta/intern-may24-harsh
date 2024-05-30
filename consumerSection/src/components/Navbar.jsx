import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	const toggleProfileDropDown = () => {
		setisProfileDropdownOpen(!isProfileDropdownOpen);
	};

	return (
		<nav className="bg-[#FFF7E2] p-4 px-4 md:px-8 flex items-center justify-between h-20 md:h-24">

			<div className="flex items-center">
				<img src="/Logo.png" alt="Logo" className="h-8 md:h-12" />
			</div>

			<div className="hidden lg:flex justify-center space-x-4 w-auto">
				<Link to="/" className="text-black links mx-2 md:mx-4">Home</Link>
				<Link to="/find-doctor" className="text-black links mx-2 md:mx-4">Find Doctor</Link>
				<Link to="/about" className="text-black links mx-2 md:mx-4">About</Link>
			</div>

			<div className="relative flex items-center">
				<img src="/Bell.svg" alt="Notifications" className="icons h-6 w-6 mr-4 md:mr-8" />

				<div className="flex items-center">
					<div className="hidden md:block">
						<h2 className='text-[--primary] font-bold text-lg md:text-2xl'>Priya Singhal</h2>
						<h4 className='text-[--primary] font-normal text-md md:text-xl'>Patient</h4>
					</div>
					<img
						src="/userProfile.png"
						alt="User Profile"
						className="h-8 w-8 md:h-16 md:w-16 rounded-full mx-2 md:mx-6"
					/>
					<button
						onClick={toggleProfileDropDown}
						className="flex items-center text-black focus:outline-none"
					>
						<div className="arrow border-2 p-1 border-[#A6A6A6] rounded-md">
							<img
								src="/downArrow.svg"
								alt="User Profile"
								className={`icons transition-all ${isProfileDropdownOpen ? "rotate-180" : ""}`}
							/>
						</div>
					</button>
					{isProfileDropdownOpen && (
						<div className="absolute right-0 top-12 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
							<Link to="/profile" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Profile</Link>
							<Link to="/settings" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Settings</Link>
							<button
								onClick={() => { /* handle logout */ }}
								className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 links"
							>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>

			<div className="lg:hidden">
				<button onClick={toggleDropdown} className="text-black focus:outline-none">
					{/* Add a menu icon for mobile view */}
					<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
					</svg>
				</button>
				{isDropdownOpen && (
					<div className="fixed right-0 top-16 mt-2 w-full bg-white rounded-md shadow-lg py-4 z-10 p-4">
						<Link to="/" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Home</Link>
						<Link to="/find-doctor" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Find Doctor</Link>
						<Link to="/about" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">About</Link>

						<Link to="/payment" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Payment</Link>

						<Link to="/chat" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Chats</Link>

						<Link to="/routines" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Routines</Link>

						<Link to="/medical-records" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Medical Record</Link>

						<Link to="/appointment" className="block px-4 py-4 text-gray-700 hover:bg-gray-100 links">Appointment</Link>
						
						<button
							onClick={() => { /* handle logout */ }}
							className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 links"
						>
							Logout
						</button>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
