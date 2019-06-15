import React, { Component } from "react";
import Expo from "expo";
import { Container, Content, Button } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native';
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
        <Container style={{ display: 'flex', backgroundColor: '#3F51B5', alignItems: 'center', justifyContent: 'space-around', padding: 40 }}>
          <Image source={require('./assets/ic2.png')} style={{ width: 250, height: 250 }} />
          <View>
            <Button bordered block style={{ backgroundColor: 'white', width: 250, margin: 10 }} onPress={() => this.setState({ isAuthenticated: true })}>
              <Text>ВХОД</Text>
            </Button>
            <Button bordered block style={{ backgroundColor: 'white', width: 250, margin: 10 }} onPress={() => this.setState({ isAuthenticated: true })}>
              <Text>РЕГИСТРАЦИЯ</Text>
            </Button>
          </View>
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
