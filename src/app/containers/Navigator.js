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
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import MapsScreen from '../components/plans/index.js';
import CreateScreen from '../components/create/index';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

// var ModalNavigator = createMaterialBottomTabNavigator(
// 	{
// 		Create: { screen: CreateScreen, 
// 			navigationOptions: {
// 				title: 'Details',
// 				tabBarIcon: () => (
// 					<Icon name="add" style={{color: 'white'}} />
// 				),
// 				tabBarLabel: 'Создать'
// 			} 
// 		},
// 		Maps: { screen: MapsScreen,
// 			navigationOptions: {
// 				tabBarIcon: () => (
// 				  <Icon name="map"  style={{color: 'white'}} />
// 				),
// 				tabBarLabel: 'Маршруты'
// 			}  
// 		},
// 		Home: { screen: HomeScreen, 
// 			navigationOptions: {
// 				tabBarIcon: (tintColor) => (
// 				  <Icon name="home" style={{color: 'white'}} />
// 				),
// 				tabBarLabel: 'Главная'
// 			}
// 		}
// 	},
// 	{
// 		initialRouteName: 'Home',
// 		barStyle: { backgroundColor: '#3F51B5' },
// 		// tabBarPosition: 'bottom',  for top
// 		// swipeEnabled: false,
// 		// showIcon: true  
// 	}
// 	);
	
	
// export default StackNavigator({
// 	MyTab: {
// 		screen: ModalNavigator,
// 		navigationOptions: { 
// 			title: 'Header title',
// 			headerStyle: {
// 				backgroundColor: '#3F51B5',
// 			},
// 			headerTintColor: '#fff',
// 		}
//  }
// })

var CreateScreenNavigator = createStackNavigator({
	MyTab: {
		screen: CreateScreen,
		navigationOptions: { 
			title: 'Новое путешествие',
			headerStyle: {
				backgroundColor: '#3F51B5',
			},
			headerTintColor: '#fff',
		}
 },
 EventsList: {
	screen: MapsScreen,
	navigationOptions: { 
		title: 'Список мероприятий',
		headerStyle: {
			backgroundColor: '#3F51B5',
		},
		headerTintColor: '#fff',
	}
 },
})

var MapsScreenNavigator = createStackNavigator({
	MyTab: {
		screen: MapsScreen,
		navigationOptions: { 
			title: 'Мои путешествия',
			headerStyle: {
				backgroundColor: '#3F51B5',
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
				backgroundColor: '#3F51B5',
			},
			headerTintColor: '#fff',
		}
	 }
})

export default  ModalNavigator = createMaterialBottomTabNavigator(
	{
		Create: { screen: CreateScreenNavigator, 
			navigationOptions: {
				tabBarIcon: () => (
					<Icon name="add" style={{color: 'white'}} />
				),
				tabBarLabel: 'Создать'
			} 
		},
		Maps: { screen: MapsScreenNavigator,
			navigationOptions: {
				tabBarIcon: () => (
				  <Icon name="map"  style={{color: 'white'}} />
				),
				tabBarLabel: 'Маршруты'
			}  
		},
		Home: { screen: HomeScreenNavigator, 
			navigationOptions: {
				tabBarIcon: (tintColor) => (
				  <Icon name="home" style={{color: 'white'}} />
				),
				tabBarLabel: 'Главная'
			}
		}
	},
	{
		initialRouteName: 'Create',
		barStyle: { backgroundColor: '#3F51B5' },
		// tabBarPosition: 'bottom',  for top
		// swipeEnabled: false,
		// showIcon: true  
	}
	);

