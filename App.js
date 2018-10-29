import React, { Component } from "react";
import Expo from "expo";
import { Container, Content } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'native-base';
import Navigator from './src/app/containers/Navigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/app/reducers';
import { MODES } from './src/app/constants';

const initialState = {
  mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

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
    return (
      <Provider store={store}>
        <Container >
          <Navigator />
        </Container>
      </Provider>
    );
  }


}
