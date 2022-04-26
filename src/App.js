import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Mint from './components/Mint';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/mint' element={<Mint />} />
		</Routes>
	);
}

export default App;
