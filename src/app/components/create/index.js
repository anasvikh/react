import React from 'react';
import { Form, Item, Input, DatePicker, Text, Button, Title, Icon, Picker, View } from 'native-base';

export default class CreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: true,
      locale: null,
      localeId: null,
      dateFrom: null,
      dateTo: null,
      events: [],
      tags: [{id: 1, name: 'Музыка', icon: 'man', isChecked: false },
      {id: 2, name: 'Выставки', icon: 'man', isChecked: false },
      {id: 3, name: 'Литература', icon: 'man', isChecked: false },
      {id: 4, name: 'Искуство', icon: 'man', isChecked: false },
      {id: 5, name: 'Спорт', icon: 'man', isChecked: false },
      {id: 6, name: 'Театр', icon: 'man', isChecked: false },
      {id: 7, name: 'Квесты', icon: 'man', isChecked: false },
      {id: 8, name: 'Музеи', icon: 'man', isChecked: false },
      {id: 9, name: 'Мастер-классы', icon: 'man', isChecked: false },
      {id: 10, name: 'Для детей', icon: 'man', isChecked: false },
      {id: 11, name: 'Кино', icon: 'man', isChecked: false },
      {id: 12, name: 'Фото', icon: 'man', isChecked: false },]
    };
    this.setLocale = this.setLocale.bind(this);
    this.setDateFrom = this.setDateFrom.bind(this);
    this.setDateTo = this.setDateTo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getLocaleId = this.getLocaleId.bind(this);
  }

  setLocale(value) {
    this.setState({
      locale: value
    });
  }

  setDateFrom(newDate) {
    this.setState({ dateFrom: newDate });
  }

  setDateTo(newDate) {
    this.setState({ dateTo: newDate });
  }

  getLocaleId() {
    const it = this;
    url = 'https://all.culture.ru/api/2.2/locales?nameQuery=' + this.state.locale;
    fetch(url)
    .then(function(response) {
      return response.json();
     })
    .then(function(result) {
      console.log(result);
      it.setState({ 
        localeId: result.locales[0]._id
      });
      alert(it.state.localeId);
    })
    .catch( alert );
  }

  onSubmit() {
    const it = this;
    url = 'https://all.culture.ru/api/2.2/events?status=accepted&start='+this.state.dateFrom.getTime()+'&locales='+this.state.localeId+'&end='+this.state.dateTo.getTime();
    this.props.navigation.setParams({
      test: 'test param',
    });
    fetch(url)
    .then(function(response) {
      return response.json();
     })
    .then(function(result) {
      it.setState({ 
        events: result.events,
        isLoading: false
      });
      //console.log(it.state.events);
      it.props.navigation.navigate('EventsList', {events: it.state.events});
      //var res = it.props.navigation.getParams('events');
      //console.log(res);
      //alert(events[1].name);
    })
    .catch( alert );
  }

  render(){
    currentDate = Date.now();
    return (<Form style={{ margin: 20, padding: 0 }}>
      <Text>Выберите место</Text>
      <Item>
        <Input 
              placeholder="город"
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onChangeText={this.setLocale}
              onEndEditing={this.getLocaleId}></Input>
      </Item>
      <Text>Выберите время</Text>
      <Item last>
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
      <View  style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
      {/* <Button rounded large success style={{width: 60, height: 60, margin: 10, justifyContent: 'center'}}>
        <Icon name='cog' style={{fontSize: 30}} />
      </Button>
      <Button rounded large error style={{width: 60, height: 60, margin: 10, justifyContent: 'center'}}>
        <Icon name='man' style={{fontSize: 30}} />
      </Button>
      <Button rounded large primary style={{width: 60, height: 60, margin: 10, justifyContent: 'center'}}>
        <Icon name='globe' style={{fontSize: 30}} />
      </Button>
      <Button rounded large success style={{width: 60, height: 60, margin: 10, justifyContent: 'center'}}>
        <Icon name='car' style={{fontSize: 30}} />
      </Button> */}
      {this.state.tags.map( (tag) => (<View style={{ alignItems: 'center' }}>
        <Button rounded large success style={{width: 60, height: 60, margin: 10, justifyContent: 'center'}}>
          <Icon name={tag.icon} style={{fontSize: 30}} />
        </Button>
        <Text  style={{fontSize: 12}} >{tag.name}</Text>
      </View>))}
      </View>
      <Button onPress={this.onSubmit}>
        <Text>Поиск мероприятий</Text>
      </Button>
      </Form>)
  }
};