import React from 'react';

const PlayerCard = () => {
	return (
		<div className='overflow-hidden bg-white shadow-md hover:shadow-lg relative rounded'>
			<div className='overflow-hidden'>
				<img
					class='w-full object-cover transform hover:scale-125 transition easy-in-out duration-500'
					src='https://images.daznservices.com/di/library/GOAL/42/9f/lionel-messi-barcelona-2020-21_1u2ypzuyrboxw17xtvs7lps1wu.jpg?quality=60&w=800'
					alt='Leo Messi'
				/>
			</div>
			<div className='m-2'>
				<h1 className='text-2xl font-bold text-gray-900'>Leo Messi</h1>
				<div className='text-lg flex justify-between my-2 font-bold text-gray-600'>
					<span>Hire price</span>
					<span>$230000</span>
				</div>
				<p className='text-gray-500 text-md'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
					ducimus, quo aut sed temporibus amet exercitationem tempora!
				</p>
				<div className='text-right'>
					<button className='text-lg uppercase tracking-wider text-white bg-pink-600 hover:bg-pink-500 px-4 py-2 mt-4'>
						Hire
					</button>
				</div>
			</div>
			<div className='absolute top-0 text-white bg-pink-600 px-4 py-2 mt-2 rounded-r-full uppercase shadow-md text-sm font-bold'>
				<span>Hired</span>
			</div>
		</div>
	);
};

export default PlayerCard;
