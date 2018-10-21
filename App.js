// import React from 'react';
// import {Container, Content} from 'native-base';
// import {StyleSheet, Text, View } from 'react-native';
// import { Header } from 'native-base';
// import AppFooterContainer from './src/app/containers/AppFooterContainer';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import reducers from './src/app/reducers';
// import {MODES} from './src/app/constants';
// //import Header from './src/app/components/header';

// import Settings from './src/app/components/settings';

// const initialState = {
// 	mode: MODES.ARTICLES
// };

// const store = createStore(reducers, initialState);

// const styles = StyleSheet.create({
// 	container: {
// 		padding: 10
// 	},
// });

// const App = () => (
// 	<Provider store={store}>
// 		<Container >
//       <Header />
// 			<Content style={styles.container}>
// 				<Settings />
// 			</Content>
//       <AppFooterContainer/>
// 		</Container>
// 	</Provider>
// );

// export default App;

import React, { Component } from "react";
import Expo from "expo";

import {Container, Content} from 'native-base';
import {StyleSheet, Text, View } from 'react-native';
import { Header } from 'native-base';
import Navigator from './src/app/containers/Navigator';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/app/reducers';
import {MODES} from './src/app/constants';
//import Header from './src/app/components/header';

const initialState = {
	mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
});

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    //console.log(store);
    return (
      	<Provider store={store}>
		<Container >
      {/* <Header />
			<Content style={styles.container}>
				<Settings />
			</Content> */}
      <Navigator />
		</Container>
	</Provider>
    );
  }


}
