import React from 'react';
import Container from './components/ui/Container';
import Home from './pages/Home';
import Recipes from './pages/recipes/Index';

import { Routes, Route } from 'react-router-dom';

export function App() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recipes" element={<Recipes />} />
			</Routes>
		</Container>
	);
}
