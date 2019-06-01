import React from 'react';
import { Keyboard, Image } from 'react-native';
import { Text, Button, Title, Icon, Picker, View, Container, Header, Content, Card, CardItem, Left, Right, Body, Item, Tabs, Tab } from 'native-base';
import moment from 'moment';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEventsList: this.props.navigation.getParam('selectedEventsList'),
            isLoading: true,
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <Container>
                <Tabs>
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
                        </MapView>
                    </Tab>
                    <Tab heading="Список">
                            <Content>
                                {this.state.selectedEventsList && this.state.selectedEventsList.map((event, index) => (
                                    <Card key={event._id}>
                                        <CardItem>
                                            <Left>
                                                <Body>
                                                    <Text>{index+1}. {event.name}</Text>
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