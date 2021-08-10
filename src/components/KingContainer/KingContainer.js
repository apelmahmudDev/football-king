import React, { useEffect, useState } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import playerFakeData from '../../fakeData/playersData.json';

const KingContainer = () => {
	const [players, setPlayers] = useState([]);

	// load players data
	useEffect(() => {
		const playersData = playerFakeData;
		setPlayers(playersData);
	}, []);

	return (
		<div className='mx-4 sm:mx-16 lg:mx-32 my-16'>
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
					<PlayerCard
						key={player.id}
						name={player.name}
						status={player.status}
						hirePrice={player.hirePrice}
						img={player.img}
						about={player.about}
					/>
				))}
			</div>
		</div>
	);
};

export default KingContainer;
