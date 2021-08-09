import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className='navbar flex justify-between flex-wrap items-center py-8'>
				<div className='nav'>
					<a
						href='#home'
						className='text-white hover:underline mx-4 inline-block'
					>
						Home
					</a>
					<a
						href='#clubs'
						className='text-white hover:underline mx-4 inline-block'
					>
						Clubs
					</a>
					<a
						href='#worldCup'
						className='text-white hover:underline mx-4 inline-block'
					>
						World Cup {new Date().getFullYear()}
					</a>
					<a
						href='#upcoming'
						className='text-white hover:underline mx-4 inline-block'
					>
						Upcoming Matches
					</a>
					<a
						href='#contact'
						className='text-white hover:underline mx-4 inline-block'
					>
						Contact
					</a>
				</div>
				<div className='login'>
					<a
						className='text-white bg-pink-600 hover:bg-pink-500 px-4 py-2 flex items-center'
						href='#login'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M13 7l5 5m0 0l-5 5m5-5H6'
							/>
						</svg>
						<span>] Login</span>
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
