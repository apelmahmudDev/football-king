import React from 'react';

const Navbar = () => {
	const menuHandler = () => {
		const nav = document.querySelector('#nav');
		if (nav.classList.contains('hidden')) {
			nav.classList.remove('hidden');
		} else {
			nav.classList.add('hidden');
		}
	};

	return (
		<div className='flex justify-center md:justify-between py-8'>
			<nav>
				<div
					className='nav hidden md:flex md:items-center md:flex-wrap leading-8 md:leading-normal'
					id='nav'
				>
					<a href='#home' className='text-white hover:underline mx-4 block'>
						Home
					</a>
					<a href='#clubs' className='text-white hover:underline mx-4 block'>
						Clubs
					</a>
					<a href='#worldCup' className='text-white hover:underline mx-4 block'>
						World Cup {new Date().getFullYear()}
					</a>
					<a href='#upcoming' className='text-white hover:underline mx-4 block'>
						Upcoming Matches
					</a>
					<a href='#contact' className='text-white hover:underline mx-4 block'>
						Contact
					</a>
				</div>
			</nav>
			<div onClick={menuHandler} className='cursor-pointer none md:hidden p-2 '>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-8 w-8 text-gray-900 bg-white rounded shadow-lg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 6h16M4 12h16m-7 6h7'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Navbar;
