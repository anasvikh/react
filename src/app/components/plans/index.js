import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import eventsTest from './helper.js';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import moment from 'moment'
 
export default class MapsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: true
    };
  }

  componentDidMount() {
    // const it = this;
    // fetch('https://all.culture.ru/api/2.2/events?status=accepted&start=1539378000000&locales=81&end=1539723600000&limit=1')
    // .then(function(response) {
    //   alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
    //   alert(response.status); // 200
    //   return response.json();
    //  })
    // .then(function(user) {
    //   //console.log('user: ', user); // iliakan
    //   //events2 = user;
    //   //console.log(events2.events[2].name); // iliakan
    //   it.setState({ 
    //     events: user.events,
    //     isLoading: false
    //   });
    //   eventsList = user;
    // })
    // .catch( alert );
  }

  render() {
    var eventsList = [];

    console.log(this.props);
    //console.log(events);
    var events2 = JSON.parse(eventsTest);
    //console.log(this.state.events.events);
    return (
<Container>
          <Content>
          {this.props.navigation.getParam('events') && this.props.navigation.getParam('events').map( (event) => (
            <Card  key={event._id}>
        <CardItem>
          <Left>
            {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
            <Body>
              <Text>{event.name}</Text>
              <Text note>{moment(event.start).format('H:mm D.M.YY')} - {moment(event.end).format('H:mm D.M.YY')}</Text>
              <Text>{event.category.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://all.culture.ru/uploads/' + event.image.name }} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent primary>
              <Icon active name="heart" />
              <Text>избранное</Text>
            </Button>
          </Left>

          <Right>
          <Button transparent primary>
              <Icon active name="add" />
              <Text>Посетить</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
          )
        
      )}
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});