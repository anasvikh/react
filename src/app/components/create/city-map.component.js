import React from 'react';
import { Keyboard, Image } from 'react-native';
import { Text, Button, Title, Icon, Picker, View, Container, Header, Content, Card, CardItem, Left, Right, Body, Item, Tabs, Tab } from 'native-base';
import moment from 'moment';
import { MapView } from 'expo';

export default class CityMapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEventsList: this.props.navigation.getParam('selectedEventsList'),
            isLoading: true,
            citiesList: [
                { id: 1, name: 'Тула', lat: 54.1960900, lon: 37.6182200 },
                { id: 2, name: 'Калуга', lat: 54.507014, lon: 36.252277 },
                { id: 3, name: 'Москва', lat: 55.75222, lon: 37.61556 },
                { id: 4, name: 'Владимир', lat: 56.1365500, lon: 40.3965800 },
                { id: 5, name: 'Нижний Новгород', lat: 56.326887, lon: 44.005986 },
                { id: 6, name: 'Рязань', lat: 54.6269, lon: 39.6916 },
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <Container>
                <Tabs>
                {/* <View style={{ margin: 15}}>

                    <Text>Экскурсионная программа "Золотое кольцо"</Text>
                    <Text note>12.06.2019 - 24.06.2019</Text>
                  <Button primary>
                    <Icon active name="info" />
                    <Text>Детали</Text>
                  </Button>
                </View>
                <Tabs>
                <Tab heading="Плес 1">
                </Tab>
                <Tab heading="Плес 2">
                </Tab>
                <Tab heading="Плес 3">
                </Tab>
                <Tab heading="Плес 4">
                </Tab> */}
                    <Tab heading="Карта">
                        <MapView
                            style={{ flex: 1 }}
                            region={{
                                latitude: this.state.selectedEventsList[0].places[0].address.mapPosition.coordinates[0],
                                longitude: this.state.selectedEventsList[0].places[0].address.mapPosition.coordinates[1],
                                latitudeDelta: 0.1922,
                                longitudeDelta: 0.1421,
                            }}
                        >
                            {/* {this.state.citiesList.map((event, index) => {
                                const coords = {
                                    latitude: event.lat,
                                    longitude: event.lon,
                                };
                                return (
                                    <MapView.Marker
                                        key={index}
                                        coordinate={coords}
                                        title={event.name}
                                        description={event.id.toString()}
                                    />
                                );
                            })} */}
                            {this.state.selectedEventsList.map((event, index) => {
                                const coords = {
                                    latitude: event.places[0].address.mapPosition.coordinates[0],
                                    longitude: event.places[0].address.mapPosition.coordinates[1],
                                };
                                return (
                                    <MapView.Marker
                                        key={index}
                                        coordinate={coords}
                                        title={event.name}
                                        description={event.shortDescription}
                                    />
                                );
                            })}
	<MapView.Polyline
		coordinates={ this.state.selectedEventsList.map(x => { return { latitude: x.places[0].address.mapPosition.coordinates[0], longitude: x.places[0].address.mapPosition.coordinates[1] } }) }
		strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
		strokeWidth={2}
	/>
	{/* <MapView.Polyline
		coordinates={ this.state.citiesList.map(x => { return { latitude: x.lat, longitude: x.lon } }) }
		strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
		strokeWidth={2}
	/> */}
                        </MapView>
                    </Tab>
                    <Tab heading="Список">
                        <Content>
                            {this.state.selectedEventsList && this.state.selectedEventsList.map((event, index) => (
                                <Card key={event._id}>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text>{index + 1}. {event.name}</Text>
                                                <Text note>{moment(event.start).format('H:mm D.M.YY')} - {moment(event.end).format('H:mm D.M.YY')}</Text>
                                                <Text>{event.category.name}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={{ uri: 'https://all.culture.ru/uploads/' + event.image.name }} style={{ height: 200, width: null, flex: 1 }} />
                                    </CardItem>
                                </Card>
                            ))}

                        </Content>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
};