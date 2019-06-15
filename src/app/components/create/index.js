import React from 'react';
import { Keyboard, Modal, TouchableHighlight } from 'react-native';
import { Form, Item, Input, DatePicker, Text, Button, Title, Icon, Picker, View, Container, Header, Content, List, ListItem } from 'native-base';
import randomColor from 'randomcolor';

export default class CreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventsFilter: {},
      isLoading: true,
      locale: null,
      localeId: null,
      dateFrom: null,
      dateTo: null,
      events: [],
      tags: [{ id: 1, name: 'Музыка', icon: 'musical-notes', isChecked: false, tagId: '29' },
      { id: 2, name: 'Выставки', icon: 'color-palette', isChecked: false, tagId: '' },
      { id: 3, name: 'Литература', icon: 'ios-book', isChecked: false, tagId: '28' },
      { id: 4, name: 'Искусcтво', icon: 'brush', isChecked: false, tagId: '122' },
      { id: 5, name: 'Спорт', icon: 'basketball', isChecked: false, tagId: '' },
      { id: 6, name: 'Театр', icon: 'bowtie', isChecked: false, tagId: '' },
      { id: 7, name: 'Квесты', icon: 'search', isChecked: false, tagId: '217' },
      { id: 8, name: 'Музеи', icon: 'md-planet', isChecked: false, tagId: '' },
      { id: 9, name: 'Творчество', icon: 'ios-cut', isChecked: false, tagId: '118,191' },
      { id: 10, name: 'Для детей', icon: 'md-happy', isChecked: false, tagId: '39' },
      { id: 11, name: 'Кино', icon: 'videocam', isChecked: false, tagId: '164' },
      { id: 12, name: 'Фото', icon: 'images', isChecked: false, tagId: '50' },],
      cities: [''],
      modalVisible: false
    };
    this.setLocale = this.setLocale.bind(this);
    this.setDateFrom = this.setDateFrom.bind(this);
    this.setDateTo = this.setDateTo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getLocaleId = this.getLocaleId.bind(this);
  }

  addCity() {
    console.log(this.state.cities);
    this.setState({
      cities: [...this.state.cities, '']
    });
  }

  cityChange(value, index) {
    this.state.cities[index] = value;
    this.setState({
      cities: this.state.cities
    })
  }

  cityRemove(index) {
    console.log('remove', index);
    this.state.cities.splice(index, 1);
    this.setState({
      cities: this.state.cities
    });
  }

  onNextClick() {
    url = 'https://localhost:44350/api/Cities/getCoord';
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        it.setState({
          localeId: result.locales[0]._id
        });
      })
      .catch(alert);
    this.props.navigation.navigate('EventsList', { eventsFilter: this.state.eventsFilter });
  }

  setLocale(value) {
    this.setState({
      locale: value
    });
  }

  setDateFrom(newDate) {
    Keyboard.dismiss();
    this.setState({ dateFrom: newDate });
  }

  setDateTo(newDate) {
    Keyboard.dismiss();
    this.setState({ dateTo: newDate });
  }

  getLocaleId() {
    const it = this;
    url = 'https://all.culture.ru/api/2.2/locales?nameQuery=' + this.state.locale;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        it.setState({
          localeId: result.locales[0]._id
        });
      })
      .catch(alert);
  }

  setTag(id) {
    let newTags = [...this.state.tags];
    let index = newTags.findIndex(el => el.id === id);
    newTags[index].isChecked = !newTags[index].isChecked;
    this.setState({ tags: newTags });
    console.log(this.state.tags);
  }

  onSubmit() {
    var localeId = this.state.localeId;
    var dateFrom = this.state.dateFrom;
    var dateTo = this.state.dateTo;
    var tags = this.state.tags;
    var eventsFilter = { localeId, dateFrom, dateTo, tags };
    console.log(eventFilter);
    this.props.navigation.navigate('Map', { eventsFilter });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    currentDate = Date.now();
    return (
      <Container>
        <Content>
          <Form style={{ margin: 15, marginBottom: 100 }}>
            <Text>Выберите даты</Text>
            <Item style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <DatePicker
                primary
                defaultDate={currentDate}
                minimumDate={currentDate}
                locale={"ru"}
                placeHolderText="Начало поездки"
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDateFrom}
              />
              <Text>-</Text>
              <DatePicker
                locale={"ru"}
                defaultDate={this.state.dateFrom ? this.state.dateFrom : null}
                minimumDate={this.state.dateFrom ? this.state.dateFrom : null}
                placeHolderText="Конец поездки"
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDateTo}
              />
            </Item>

                        <Text>Расскажите о своих интересах</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {this.state.tags.map((tag) => (<View style={{ alignItems: 'center' }} key={tag.id}>
                <Button rounded
                  style={{ width: 60, height: 60, margin: 5, justifyContent: 'center', backgroundColor: '#ffffff', borderWidth: 2, borderColor: randomColor({ luminosity: 'light', seed: tag.name }) }}
                  onPress={this.setTag.bind(this, tag.id)}>
                  <Icon name={tag.isChecked ? 'md-checkmark-circle' : tag.icon} style={{ fontSize: 24, color: randomColor({ luminosity: 'bright', seed: tag.name }) }} />
                </Button>
                <Text style={{ fontSize: 12 }} >{tag.name}</Text>
              </View>))}
            </View>
            <Text>Выберите место</Text>
            {/* <Item> */}
            <List>
              {this.state.cities && this.state.cities.map((city, index) => (
                <ListItem key={index} style={{ height: 50 }}>
                  <Input value={city} onChangeText={(e) => this.cityChange(e, index)}></Input>
                  <Button transparent primary onPress={() => this.cityRemove(index)}>
                    <Icon name='close'></Icon>
                  </Button>
                </ListItem>
              ))}
            </List>
            {/* <Input
                placeholder="город"
                placeholderTextColor="#d3d3d3"
                onChangeText={this.setLocale}
                onBlur={this.getLocaleId}
              ></Input> */}


            {/* </Item> */}
            {/* <Text>Выберите время</Text>
            <Text>Расскажите о своих интересах</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {this.state.tags.map((tag) => (<View style={{ alignItems: 'center' }} key={tag.id}>
                <Button rounded
                  style={{ width: 60, height: 60, margin: 5, justifyContent: 'center', backgroundColor: '#ffffff', borderWidth: 2, borderColor: randomColor({ luminosity: 'light', seed: tag.name }) }}
                  onPress={this.setTag.bind(this, tag.id)}>
                  <Icon name={tag.isChecked ? 'md-checkmark-circle' : tag.icon} style={{ fontSize: 24, color: randomColor({ luminosity: 'bright', seed: tag.name }) }} />
                </Button>
                <Text style={{ fontSize: 12 }} >{tag.name}</Text>
              </View>))}
            </View>
            <Button onPress={this.onSubmit} style={{ alignSelf: 'center', marginTop: 10 }}>
              <Text>Поиск мероприятий</Text>
            </Button> */}
          </Form>

        </Content>
        <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', position: 'absolute', bottom: 15, left: 20, flex: 1 }}>
          <Button onPress={(e) => this.addCity(e)} style={{ marginRight: 30 }}>
            <Text>Добавить город</Text>
          </Button>
          <Button onPress={(e) => this.onNextClick(e)}>
            <Text>Продолжить</Text>
          </Button>
        </View>
      </Container>)
  }
};