import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const KingContainer = () => {
	const players = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div className='mx-4 sm:mx-16 lg:mx-32'>
			<div>
				<h1>The King Of Football</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur <br />
					adipisicing elit. Laudantium <br />
					molestiae tempora
				</p>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
				{players.map((player) => (
					<PlayerCard />
				))}
			</div>
		</div>
	);
};

export default KingContainer;
