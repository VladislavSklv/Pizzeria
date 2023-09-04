import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { mainApi } from './api/mainApi';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  	document.getElementById('root') as HTMLElement
);

const rootReducer = combineReducers({
	[mainApi.reducerPath]: mainApi.reducer
})

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(mainApi.middleware),
})

root.render(
  	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;