import React, { Component } from "react";
import Expo from "expo";
import { Container, Content, Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'native-base';
import Navigator from './src/app/containers/Navigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/app/reducers';
import { MODES } from './src/app/constants';
import LoginScreen from "./src/app/components/login";

const initialState = {
  mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      isAuthenticated: false
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
    if (this.state.isReady && !this.state.isAuthenticated) {
      return (
        <Container style={{ display: 'flex', backgroundColor: '#3F51B5', alignItems: 'center', justifyContent: 'space-around' }}>
          <Button bordered block style={{backgroundColor: 'white'}} onPress={() => this.setState({ isAuthenticated: true })}>
            <Text>войти</Text>
          </Button>
        </Container>
      );
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
