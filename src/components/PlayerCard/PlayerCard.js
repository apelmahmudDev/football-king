import React, { useContext } from 'react';
import { PlayerContext } from '../../App';

const PlayerCard = ({ name, status, hirePrice, img, about }) => {
	const { players, setPlayers } = useContext(PlayerContext);

	// handler
	const playerHandler = (data) => {
		const newPlayers = [...players, data];
		setPlayers(newPlayers);
	};
	return (
		<div className='overflow-hidden bg-white shadow-md hover:shadow-lg relative rounded'>
			<div className='overflow-hidden'>
				<img
					className='w-full object-cover transform hover:scale-125 transition easy-in-out duration-500'
					src={img}
					alt={`${name}`}
				/>
			</div>
			<div className='m-2'>
				<h1 className='text-2xl font-bold text-gray-900'>{name}</h1>
				<div className='text-lg flex justify-between my-2 font-bold text-gray-600'>
					<span>Hire price</span>
					<span>${hirePrice}</span>
				</div>
				<p className='text-gray-500 text-md'>{about}</p>
				<div className='text-right'>
					<button
						onClick={() => playerHandler({ name, hirePrice })}
						className='text-lg uppercase tracking-wider text-white bg-pink-600 hover:bg-pink-500 px-4 py-2 mt-4'
					>
						Hire
					</button>
				</div>
			</div>
			<div className='absolute top-0 text-white bg-pink-600 px-4 py-2 mt-2 rounded-r-full uppercase shadow-md text-sm font-bold'>
				<span>{status}</span>
			</div>
		</div>
	);
};

export default PlayerCard;
