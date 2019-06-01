import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Spinner, Text, Button, Icon, Left, Body, Right } from 'native-base';

import moment from 'moment';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  login() {
    var url = 'http://192.168.1.163:53706/Images'
    fetch(url)
    .then(function (response) {
      alert(response);
      return response.json();
    })
    .catch(alert);
  }

  render() {
    return (
      <Container>
        <Content>
          <Button  onPress={this.login} >
            <Text>ВХОД</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}