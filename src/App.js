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

		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/mint' element={<Mint />} />
		</Routes>

	);
}

export default App;
