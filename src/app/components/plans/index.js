import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import eventsTest from './helper.js';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import moment from 'moment'

export default class MapsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: this.props.navigation.getParam('events'),
      isLoading: true
    };
  }

  componentDidMount() {
  }

  showDetails(event) {
    this.props.navigation.navigate('EventDescription', { event: event });
  }

  selectEvent(eventId) {
    let tempEvents = [...this.state.events];
    let index = tempEvents.findIndex(el => {alert(el._id); return el._id == eventId});
    tempEvents[index].isSelected = !tempEvents[index].isSelected;
    this.setState({ events: tempEvents });
  }

  render() {
    return (
      <Container>
        <Content>
          {this.state.events && this.state.events.map((event) => (
            <Card key={event._id}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{event.name}</Text>
                    <Text note>{moment(event.start).format('H:mm D.M.YY')} - {moment(event.end).format('H:mm D.M.YY')}</Text>
                    <Text>{event.category.name}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{ uri: 'https://all.culture.ru/uploads/' + event.image.name }} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent primary onPress={this.showDetails.bind(this, event)}>
                    <Icon active name="more" />
                    <Text>Описание</Text>
                  </Button>
                </Left>

                <Right>
                  <Button transparent={!event.isSelected} primary onPress={this.selectEvent.bind(this, event._id)}>
                    <Icon active name="add" />
                    <Text>{event.isSelected ? 'Отмена' : 'Посетить'}</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}