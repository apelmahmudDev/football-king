import React from 'react';
import MatchHighLights from '../../images/match.png';

const HighLights = () => {
	return (
		<div className='grid md:grid-cols-2 gap-10 mt-32 mx-4 sm:mx-16 lg:mx-32'>
			<div>
				<h1 className='text-2xl md:text-4xl my-4 text-gray-900 font-bold'>
					All HighLights <br />
					Copa America 2021
				</h1>
				<p className='text-gray-500'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea odio
					tempore libero consequuntur pariatur voluptatibus, molestias amet
					accusantium nobis vero iure.
				</p>
				<button className='text-lg uppercase tracking-wider text-white bg-pink-600 hover:bg-pink-500 px-8 py-2 mt-4 flex items-center'>
					<span>Watch Now</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 ml-2'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M13 7l5 5m0 0l-5 5m5-5H6'
						/>
					</svg>
				</button>
			</div>
			<div>
				<img
					className='h-42 w-42 inline-block'
					src={`${MatchHighLights}`}
					alt='Match Highlights'
				/>
			</div>
		</div>
	);
};

export default HighLights;
