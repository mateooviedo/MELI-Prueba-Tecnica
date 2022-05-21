import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFoundScreen from '../screens/NotFoundScreen';
import MainScreen from '../screens/MainScreen';

export const AppRouter = function (props) {
	return (
		<Routes>
			<Route path="*" element={<NotFoundScreen />} />
			<Route path="/" element={<MainScreen />} />
		</Routes>
	);
};
