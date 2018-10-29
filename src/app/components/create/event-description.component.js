import React from 'react';
import { Keyboard, Image } from 'react-native';
import { Text, Button, Title, Icon, Picker, View, Container, Header, Content, Card, CardItem, Left, Right, Body, Item } from 'native-base';
import moment from 'moment';

export default class EventDescriptionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: this.props.navigation.getParam('event'),
        };
    }

    componentDidMount() {
        // const it = this;
        // fetch('https://all.culture.ru/api/2.2/events?status=accepted&start=1539378000000&locales=81&end=1539723600000')
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (result) {
        //         it.setState({
        //             event: result.events[3],
        //             isLoading: false
        //         });
        //     })
        //     .catch(alert);
    }

    selectEvent(id) {
        this.props.navigation.navigate('EventsList');
    }

    render() {
        var randomColor = require('randomcolor');
        console.log(this.state.event);
        return (
            <Container>
                <Content style={{ padding: 10 }}>
                    {this.state.event && <View key={this.state.event._id}>
                        <View>
                            <Text>{this.state.event.name}</Text>
                            <Text note>{moment(this.state.event.start).format('H:mm D.M.YY')} - {moment(this.state.event.end).format('H:mm D.M.YY')}</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text>{this.state.event.category.name}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="cash"></Icon>
                                {this.state.event.price ? <Text> {this.state.event.price} р</Text> : <Text> Бесплатно</Text>}
                            </View>
                        </View>
                        <CardItem style={{flexWrap: 'wrap'}}>
                            {this.state.event.tags.map((tag) => (
                                <Button rounded bordered small key={tag._id} style={{ margin: 2, borderWidth: 7, borderColor: randomColor({ luminosity: 'bright', seed: tag.name }) }}>
                                    <Text style={{ color: randomColor({ luminosity: 'bright', seed: tag.name }) }}>{tag.name}</Text>
                                </Button>))}
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://all.culture.ru/uploads/' + this.state.event.image.name }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem cardBody>
                            <Text>{this.state.event.description.replace(/<(?:.|\n)*?>/gm, '')}</Text>
                        </CardItem>
                        <CardItem cardBody>
                            {this.state.event.gallery && this.state.event.gallery.map((picture) => (
                                <Image source={{ uri: 'https://all.culture.ru/uploads/' + picture.name }} style={{ height: 100, width: 100, flex: 1, margin: 5 }} key={picture.name} />
                            ))}
                        </CardItem>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="pin"></Icon>
                                <Text> {this.state.event.places[0].locale.name}, {this.state.event.places[0].address.street}</Text>
                            </View>
                            <Text> {this.state.event.places[0].name}</Text>
                        </View>
                        <CardItem style={{justifyContent: 'flex-end'}}>
                                <Button primary onPress={this.selectEvent.bind(this, this.state.event._id)}>
                                    <Icon active name="add" />
                                    <Text>Посетить</Text>
                                </Button>
                        </CardItem>
                    </View>}
                </Content>
            </Container>)
    }
};