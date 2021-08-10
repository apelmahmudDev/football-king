import React, { useContext } from 'react';
import { PlayerContext } from '../../App';

const Cart = () => {
	const { players } = useContext(PlayerContext);
	const totalPrice = players.reduce((sum, player) => sum + player.hirePrice, 0);

	return (
		<div className='h-auto w-auto md:w-96 bg-gradient-to-r from-gray-100 via-purple-50 to-pink-100 p-5 rounded shadow-lg'>
			<h1 className='mb-2 text-2xl'>Team Selection</h1>
			<div className='flex justify-between border-b-2 border-gray-600 mb-2'>
				<h3 className='text-md font-bold text-gray-900 pb-1'>Player</h3>
				<h3 className='text-md font-bold text-gray-900 pb-1'>
					{players.length}
				</h3>
				<h3 className='text-md font-bold text-gray-900 pb-1'>Hire Price</h3>
			</div>
			{players.length < 1 ? (
				<div>No Player selected!</div>
			) : (
				<ul>
					{players.map((player) => (
						<div key={Math.random() * 100}>
							<li className='flex justify-between font-bold text-sm text-gray-700 leading-normal'>
								<div>{player.name}</div>
								<div>
									<span>$ </span>
									{player.hirePrice}
								</div>
							</li>
						</div>
					))}
					<div className='flex justify-between border-t-2 border-gray-600 mt-4'>
						<h3 className='text-md font-bold text-gray-900 pt-1'>Total</h3>
						<h3 className='text-md font-bold text-gray-900 pt-1'>
							${totalPrice}
						</h3>
					</div>
				</ul>
			)}
		</div>
	);
};

export default Cart;
