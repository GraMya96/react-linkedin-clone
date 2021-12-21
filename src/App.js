import './App.css';
import LoginPage from './pages/login-page';

import { useRoutes, Navigate } from 'react-router-dom'; //react-router-dom v6
import HomePage from './pages/home-page';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/user/user.actions';
import { createUserProfileDocumentInFirebase } from './redux/user/user.utils';
import { auth } from './firebase/firebase.config';

function App() {

	const user = useSelector( state => state.user.user );
	const dispatch = useDispatch();

	const getUserAuth = () => {
		return auth.onAuthStateChanged(async user => {
			dispatch( setUser( user ) );
			createUserProfileDocumentInFirebase( user );
		})
	}

	useEffect(() => {
		getUserAuth();
    }, [])

	// Routes (react-router-dom v6)
	// useRoutes hook can only be used in the context
	// of the BrowserRouter component, se we wrapped the whole
	// App component with it, in index.js
	let routes = useRoutes([
		{ 	path: '/',
			element:
				user && user.accessToken && user.accessToken !== ''
					? <Navigate replace to="/home" />
					: <LoginPage /> },
		{
			path: '/home',
			element:
				user && user.accessToken && user.accessToken !== ''
					? <HomePage />
					: <Navigate replace to="/" />,
			children: {}
		}
	]);

	return routes;

}

export default App;
