import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/global/bootstrap-grid.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/global/theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<Provider store={ store }>
				<ThemeProvider theme={ theme }>
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
