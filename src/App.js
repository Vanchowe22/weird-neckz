import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountdownTimer from './components/CountdownTimer';
import Home from './components/Home';
import Mint from './components/Mint';

function App() {
	const [countdown, setCountdown] = useState(false);

	const didEnd = () => {
		setCountdown(true);
	}

	return (
		<>
			{
				countdown
					? <Routes>
						<Route path='/' element={<Home />} />
						<Route path='/mint' element={<Mint />} />
					</Routes>
					: <CountdownTimer countdownTimestampMs={1651081540000} didEnd={didEnd} />
			}
		</>
	);
}

export default App;
