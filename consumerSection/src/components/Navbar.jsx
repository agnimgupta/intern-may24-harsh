import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<nav className="bg-[#FFF7E2] p-4 px-[2rem] flex items-center justify-between h-[100px]">

			<div className="   flexClass ">
				<img src="./Logo.png" alt="Logo" className="" />
			</div>

			<div className=" flex justify-center space-x-4  w-[33%]">
				<Link to="/" className="text-black links mx-4">Home</Link>
				<Link to="/find-doctor" className="text-black links mx-4">Find Doctor</Link>
				<Link to="/about" className="text-black links mx-4">About</Link>
			</div>


			<div className="relative w-[33%] flexEnd ">
				<img src="./Bell.svg" alt="" className='icons mr-8' />

				<div className="userProfile flexClass ml-8">
					<div className="names">
						<h2 className='text-[--primary] font-bold text-2xl' >Priya Singhal</h2>
						<h4 className='text-[--primary] font-normal text-xl' >Patient</h4>
					</div>
					<img
						src="./userProfile.png"
						alt="User Profile"
						className="h-16 w-16 rounded-full mx-6"
					/>
					<button
						onClick={toggleDropdown}
						className="flex items-center text-black focus:outline-none"
					>
						<div className="arrow border-2 p-1 border-[#A6A6A6] rounded-md">
							<img
								src="./downArrow.svg"
								alt="User Profile"
								className={`icons transition-all  ${isDropdownOpen ? "rotateIcon" : "null"}`}  
							/>
						</div>
					</button>
					{isDropdownOpen && (
						<div className="absolute right-0 top-[50px] mt-[2rem] w-64 bg-white rounded-md shadow-lg py-1 z-[10]">
							<Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 links">Profile</Link>
							<Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 links">Settings</Link>
							<button
								onClick={() => {/* handle logout */ }}
								className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 links"
							>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
