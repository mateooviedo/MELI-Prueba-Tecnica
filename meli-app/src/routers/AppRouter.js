import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFoundScreen from '../screens/NotFoundScreen';
import MainScreen from '../screens/MainScreen';
import ResultScreen from '../screens/ResultScreen';
import DetailScreen from '../screens/DetailScreen';

export const AppRouter = function () {
	return (
		<Routes>
			<Route path="*" element={<NotFoundScreen />} />
			<Route path="/" element={<MainScreen />} />
			<Route exact path="items" element={<ResultScreen />} />;
			<Route exact path="items/:id" element={<DetailScreen />} />
		</Routes>
	);
};
