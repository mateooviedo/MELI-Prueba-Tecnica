import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainScreen } from '../screens/MainScreen';

export const AppRouter = function(props) {
	return (
		<Routes>
			<Route path='/' element={<MainScreen />} />
		</Routes>
		);
};

