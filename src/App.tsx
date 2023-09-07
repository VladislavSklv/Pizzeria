import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { Routes, Route, NavLink } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import { Button, Drawer, Container } from '@mui/material';

function App() {
  	return (
    	<div>
			<Header/>
			<Container maxWidth='xl'>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/cart' element={<CartPage/>}/>
					<Route path='/error' element={<ErrorPage/>}/>
				</Routes>
			</Container>
		</div>
  	);
}

export default App;
