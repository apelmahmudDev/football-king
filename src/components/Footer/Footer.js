import React from 'react';
import logo from '../../images/Logo.png';
import instagram from '../../images/social-icons/Instagram.png';
import dribble from '../../images/social-icons/Dribble.png';
import twitter from '../../images/social-icons/Twitter.png';
import youtube from '../../images/social-icons/Youtube.png';

const Footer = () => {
	const socialIcon = [
		{
			id: 1,
			icon: <img src={`${instagram}`} alt='instagram' />,
		},
		{
			id: 2,
			icon: <img src={`${dribble}`} alt='dribble' />,
		},
		{
			id: 3,
			icon: <img src={`${twitter}`} alt='twitter' />,
		},
		{
			id: 4,
			icon: <img src={`${youtube}`} alt='youtube' />,
		},
	];
	return (
		<div className='mt-32 mb-4 flex justify-center'>
			<div className='text-center'>
				<div className='w-80'>
					<img src={`${logo}`} alt='football-logo' />
				</div>
				<div className='flex justify-center gap-3 my-4'>
					{socialIcon.map((icon) => (
						<a key={icon.id} href='/#'>
							<div className='w-10'>{icon.icon}</div>
						</a>
					))}
				</div>

				<div>
					<p>Copyright &copy; {new Date().getFullYear()} Football</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
