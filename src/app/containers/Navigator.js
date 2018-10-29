// import React from 'react';
// import AppFooter from '../components/AppFooter.js';
// import {connect} from 'react-redux';
// import {setMode} from '../actions';
// const mapStateToProps = (state) => ({
// 	mode: state.mode
// });
// const mapDispatchToProps = (dispatch) => ({
// 	setMode(mode) {
// 		dispatch(setMode(mode));
// 	}
// });
// const AppFooterContainer = ({mode, setMode}) => (
// 	<AppFooter mode={mode} setMode={setMode} />
// );
// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(AppFooterContainer);

import React from 'react';
import { Text, View, WebView } from 'react-native';
import { Icon } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import MapsScreen from '../components/plans/index';
import CreateScreen from '../components/create/index';
import EventDescriptionScreen from '../components/create/event-description.component';


var randomColor = require('randomcolor');
var primaryColor = '#3F51B5'; //'#62B1F6'; //randomColor({luminosity: "bright", hue: 'blue'});

//primaryColor = '#2cbddd'; //'#3F51B5'; //2cbddd #db8c5c #1f789e #3e71c9

class HomeScreen extends React.Component {
	render() {
		console.log(primaryColor);
		return (
			<View>
			<WebView
			source={{uri: 'https://github.com/facebook/react-native'}}
			style={{marginTop: 20}}
		/>
			</View>

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
		screen: MapsScreen,
		navigationOptions: {
			title: 'Список мероприятий',
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
}, {
		initialRouteName: 'MyTab'
	})

var MapsScreenNavigator = createStackNavigator({
	MyTab: {
		screen: MapsScreen,
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
		initialRouteName: 'Create',
		barStyle: { backgroundColor: primaryColor },
		// tabBarPosition: 'bottom',  for top
		// swipeEnabled: false,
		// showIcon: true  
	}
);

