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
			<Route path='result' element={<ResultScreen />} />
			<Route path="detail" element={<DetailScreen />} />
		</Routes>
	);
};
