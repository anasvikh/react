import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'native-base';

import Events from '../events';
import Settings from '../settings';

export default CreateBottomTabNavigator(
	{
	  Home1: Events,
		Settings: Settings,
		Home: Settings,
	},
	{
	  navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
		  const { routeName } = navigation.state;
		  let iconName;
			if (routeName === 'Home') { iconName = `home${focused ? '' : '-outline'}`;} 
			else { iconName = `heart${focused ? '' : '-outline'}`; }
  
		  // You can return any component that you like here! We usually use an
		  // icon component from react-native-vector-icons
			//return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
			return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
		},
		title: header,
	  }),
	  tabBarOptions: {
		activeTintColor: 'tomato',
		inactiveTintColor: 'gray',
	  },
	}
  );