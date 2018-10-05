import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, Text, View } from 'react-native';
import { Header } from 'native-base';
import AppFooterContainer from './src/app/containers/AppFooterContainer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/app/reducers';
import {MODES} from './src/app/constants';
//import Header from './src/app/components/header';

import Settings from './src/app/components/settings';

const initialState = {
	mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
});

const App = () => (
	<Provider store={store}>
		<Container >
      <Header />
			<Content style={styles.container}>
				<Settings />
			</Content>
      <AppFooterContainer/>
		</Container>
	</Provider>
);

export default App;
