import { createContext, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HighLights from './components/HighLights/HighLights';
import KingContainer from './components/KingContainer/KingContainer';

// context Api
export const PlayerContext = createContext();

const App = () => {
	const [players, setPlayers] = useState([]);
	return (
		<PlayerContext.Provider value={{ players, setPlayers }}>
			<Header />
			<KingContainer />
			<HighLights />
			<Footer />
		</PlayerContext.Provider>
	);
};

export default App;
