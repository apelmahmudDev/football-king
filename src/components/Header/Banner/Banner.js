import React from 'react';
import kingWithFootball from '../../../images/banner-left.svg';

const Banner = () => {
	return (
		<div className='md:flex md:items-center md:justify-between py-8'>
			<div>
				<h1 className='text-4xl md:text-5xl lg:text-7xl text-white leading-tight font-bold'>
					Conmebol <br />
					Copa America
					<br />
					2021
				</h1>
				<button className='text-white bg-pink-600 hover:bg-pink-500 px-4 py-2 flex items-center mt-8'>
					<span>Watch Live</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
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
			<div className='mt-8 md:mt-0'>
				<img src={`${kingWithFootball}`} alt='king with football' />
			</div>
		</div>
	);
};

export default Banner;
