import React from 'react';
import Cart from '../Cart/Cart';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

const Header = () => {
	return (
		<div className='bg-blue-800'>
			<div className='mx-32'>
				<Navbar />
				<Cart />
				<Banner />
			</div>
		</div>
	);
};

export default Header;
