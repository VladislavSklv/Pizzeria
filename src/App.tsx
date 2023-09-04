import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { useGetAllPizzaQuery } from './api/mainApi';
import { Routes, Route } from 'react-router-dom';
import PizzasPage from './pages/PizzasPage';
import DessertsPage from './pages/DessertsPage';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import CartPage from './pages/CartPage';

function App() {
	const {data: pizza, isFetching, isLoading, isError} = useGetAllPizzaQuery('')

	useEffect(() => {
		console.log(pizza)
	}, [pizza])

  	return (
    	<div>
			<Header/>
			<Routes>
				<Route path='/' element={<MainPage/>}/>
				<Route path='/pizzas' element={<PizzasPage/>}/>
				<Route path='/desserts' element={<DessertsPage/>}/>
				<Route path='/cart' element={<CartPage/>}/>
				<Route path='/error' element={<ErrorPage/>}/>
			</Routes>
		</div>
  	);
}

export default App;
