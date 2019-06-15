import React from 'react';
import { Text, View, WebView } from 'react-native';
import { Icon, Container, Button } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import EventsListScreen from '../components/plans/index';
import CreateScreen from '../components/create/index';
import EventDescriptionScreen from '../components/create/event-description.component';
import MapScreen from '../components/create/map.component';



var randomColor = require('randomcolor');
var primaryColor = '#3F51B5'; //'#62B1F6'; //randomColor({luminosity: "bright", hue: 'blue'});

//primaryColor = '#2cbddd'; //'#3F51B5'; //2cbddd #db8c5c #1f789e #3e71c9

class HomeScreen extends React.Component {
	login() {
    var url = 'http://192.168.1.163:53706/Images';
    fetch(url)
      .then(function (response) {
				console.log('1', response);
        return response.json();
      })
      .then(function (result) {
				console.log('2', result);
				alert(result);
      })
      .catch(alert);
  }
	render() {
		console.log(primaryColor);
		return (
			<Container style={{ display: 'flex', justifyContent: 'space-around', padding: 20 }}>
				<Text style={{fontSize: 30, color: '#7a8be8' }}>Добро пожаловать! Спланируйте первое путешествие</Text>
				<Button onPress={this.login}>
					<Text>тест</Text>
				</Button>
			</Container>

		);
	}
}

class TripScreen extends React.Component {
	render() {
		return (
			<Container style={{ display: 'flex', justifyContent: 'space-around', padding: 20 }}>
				<Text style={{fontSize: 30, color: '#7a8be8'}}>Здесь будут храниться ваши маршруты</Text>
			</Container>

		);
	}
}

var CreateScreenNavigator = createStackNavigator({
	MyTab: {
		screen: CreateScreen,
		navigationOptions: {
			title: 'Новое путешествие',
			headerStyle: {
				backgroundColor: primaryColor,
			},
			headerTintColor: '#fff',
		}
	},
	EventsList: {
		screen: EventsListScreen,
		navigationOptions: {
			//title: 'Список мероприятий',
			headerStyle: {
				backgroundColor: primaryColor,
			},
			headerTintColor: '#fff',
		}
	},
	EventDescription: {
		screen: EventDescriptionScreen,
		navigationOptions: {
			title: 'Описание мероприятия',
			headerStyle: {
				backgroundColor: primaryColor,
			},
			headerTintColor: '#fff',
		}
	},
	Map: {
		screen: MapScreen,
		navigationOptions: {
			title: 'Составление маршрута',
			headerStyle: {
				backgroundColor: primaryColor,
			},
			headerTintColor: '#fff',
		}
	},
	CityMap: {
		screen: CityMapScreen,
		navigationOptions: {
			title: 'Составление маршрута',
			headerStyle: {
				backgroundColor: primaryColor,
			},
			headerTintColor: '#fff',
		}
	},

}, {
		initialRouteName: 'MyTab'
	})

var MapsScreenNavigator = createStackNavigator({
	MyTab: {
		screen: TripScreen,
		navigationOptions: {
			title: 'Мои путешествия',
			headerStyle: {
				backgroundColor: primaryColor,
			},
			headerTintColor: '#fff',
		}
	}
})

var HomeScreenNavigator = createStackNavigator({
	MyTab: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'Главная',
			headerStyle: {
				backgroundColor: primaryColor,
			},
			headerTintColor: '#fff',
		}
	}
})

export default ModalNavigator = createMaterialBottomTabNavigator(
	{
		Create: {
			screen: CreateScreenNavigator,
			navigationOptions: {
				tabBarIcon: () => (
					<Icon name="add" style={{ color: 'white' }} />
				),
				tabBarLabel: 'Создать'
			}
		},
		Maps: {
			screen: MapsScreenNavigator,
			navigationOptions: {
				tabBarIcon: () => (
					<Icon name="map" style={{ color: 'white' }} />
				),
				tabBarLabel: 'Маршруты'
			}
		},
		Home: {
			screen: HomeScreenNavigator,
			navigationOptions: {
				tabBarIcon: (tintColor) => (
					<Icon name="home" style={{ color: 'white' }} />
				),
				tabBarLabel: 'Главная'
			}
		}
	},
	{
		initialRouteName: 'Home',
		barStyle: { backgroundColor: primaryColor },
		// tabBarPosition: 'bottom',  for top
		// swipeEnabled: false,
		// showIcon: true  
	}
);

// Keystore password: 8820b130fed941e389f1362eea5b7a87
// Key alias:         QGFudmk1Ny9Bd2Vzb21lUHJvamVjdA==
// Key password:      25b3158a144c4e93a89109227cdae5d7

// Certificate fingerprints:
// MD5:  63:6C:4C:2B:F1:BC:70:A1:D5:4B:2D:D1:FD:FB:10:AF
// SHA1: 8C:48:EE:65:84:5B:FC:65:89:67:52:FB:D9:CC:BD:9D:03:12:B7:A5
// SHA256: 28:42:5F:A7:33:CD:5D:E9:DB:9F:14:92:C6:68:8C:75:ED:AE:66:89:EA:C4:37:E6:D1:9E:2B:48:91:F0:03:C6
// Signature algorithm name: SHA256withRSA
// Version: 3

// AIzaSyCVw5X_jUKrRNOkBmNqGar0uxhf02k3Oy4
