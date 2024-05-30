import React from 'react';

const Profile = () => {
	return (
		<div className="flex justify-center items-center flex-col h-[60vh] p-4 w-full">
			<div className="bg-white rounded-lg border w-full max-w-4xl flex flex-col  items-center ">
				<h2 className="text-xl font-semibold mb-8 bg-[#3a643b19] p-6 text-[--primary] w-full text-center ">Patient Profile</h2>
				
				<div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto">
					<div className="flex justify-center mb-4 md:mb-0 md:mr-6">
						<img
							className="w-24 h-24 rounded-full object-cover"
							src="./userProfile.png" // Replace with the actual image source
							alt="Priya Singhal"
						/>
					</div>

					<div className="content flex flex-col md:flex-row md:items-start w-full md:w-auto p-4">
						<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 mb-4 md:mb-0 text-center">
							<div className="mb-4 md:mb-0">
								<p className="font-semibold">Name</p>
								<h2 className=" font-bold text-gray-900">Priya Singhal</h2>
							</div>
							<div>
								<p className="font-semibold">DOB</p>
								<p className='font-bold'>24th July, 1999</p>
							</div>
							<div>
								<p className="font-semibold">Gender</p>
								<p className='font-bold'>Female</p>
							</div>
							<div>
								<p className="font-semibold">Mob No.</p>
								<p className='font-bold'>9906548776</p>
							</div>
							<div>
								<p className="font-semibold">Height</p>
								<p className='font-bold'>179 cm</p>
							</div>
							<div>
								<p className="font-semibold">Weight</p>
								<p className='font-bold'>70 kg</p>
							</div>
						</div>
					</div>
					
					<div className="flex justify-center mt-4 md:mt-0">
						<button className="bg-[--primary] text-white px-4 py-2 rounded-lg focus:outline-none">
							Edit Profile
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
