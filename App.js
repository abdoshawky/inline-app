import React from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

class App extends React.Component {
	state = {
		isReady: false,
	};

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		});

		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		}

		return <Home />;
	}
}

export default App;