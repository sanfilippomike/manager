import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyAYPKIZta8cSMsjUDxvc8c1As9BcowEJyI',
			authDomain: 'manager-76475.firebaseapp.com',
			databaseURL: 'https://manager-76475.firebaseio.com',
			storageBucket: 'manager-76475.appspot.com',
			messagingSenderId: '505722987296'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return ( 
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
