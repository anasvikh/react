import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import eventsTest from './helper.js';
import { Container, Header, Content, Card, CardItem, Spinner, Text, Button, Icon, Left, Body, Right } from 'native-base';

import moment from 'moment';

export default class EventsListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Text
          style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', paddingRight: 15 }}
          onPress={navigation.getParam('onNextButtonClick')}>
          далее
				</Text>)
    };
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   events: this.props.navigation.getParam('events'),
    //   isLoading: true
    // };
    this.state = {
      eventsFilter: this.props.navigation.getParam('eventsFilter'),
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ onNextButtonClick: this._onNextButtonClick });
    
    if (this.state.eventsFilter == 2) {
      console.log(this.state.eventsFilter);
      var tagsString = '';
      this.state.eventsFilter.tags.forEach(tag => {
        if (tag.isChecked && tag.tagId) tagsString += tag.tagId + ',';
      });
      tagsString = tagsString.slice(0, -1);
      
      url = 'https://all.culture.ru/api/2.2/events?status=accepted&start=' + this.state.eventsFilter.dateFrom.getTime() + '&locales=' + this.state.eventsFilter.localeId + '&end=' + this.state.eventsFilter.dateTo.getTime();
      if (tagsString) url += '&tags=' + tagsString;
    } else url = 'https://all.culture.ru/api/2.2/events?status=accepted&start=1539378000000&locales=81&end=1539637200000';
    const it = this;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        it.setState({
          events: result.events,
          isLoading: false,
        });
      })
      .catch(alert);
  }

  showDetails(event) {
    this.props.navigation.navigate('EventDescription', { event: event });
  }

  selectEvent(eventId) {
    let tempEvents = [...this.state.events];
    let index = tempEvents.findIndex(el => el._id == eventId);
    tempEvents[index].isSelected = !tempEvents[index].isSelected;
    this.setState({ events: tempEvents });
  }

  _onNextButtonClick = () => {
    this.props.navigation.navigate('Map', { selectedEventsList: this.state.events.filter(event => event.isSelected) });
  };

  render() {
    return (
      <Container>
        <Content>
          {this.state.isLoading && <Spinner color='#3F51B5' />}
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