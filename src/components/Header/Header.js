import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

const Header = () => {
	return (
		<div class='bg-blue-800'>
			<div class='mx-32'>
				<Navbar />
				<Banner />
			</div>
		</div>
	);
};

export default Header;
