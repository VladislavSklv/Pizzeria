import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import { Button, Drawer } from '@mui/material';

function App() {
	const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  	return (
    	<div>
			<Header/>
			<Routes>
				<Route path='/' element={<MainPage/>}/>
				<Route path='/products' element={<ProductsPage/>}/>
				<Route path='/cart' element={<CartPage/>}/>
				<Route path='/error' element={<ErrorPage/>}/>
			</Routes>
		</div>
  	);
}

export default App;
