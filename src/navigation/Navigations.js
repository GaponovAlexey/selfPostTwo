import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import PostScreen from '../screen/PostScreen';
import MainScreen from '../screen/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { THEME } from '../THEME';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const BookTabNav = createStackNavigator()

function Home() {
	return (
		<BookTabNav.Navigator>
			<BookTabNav.Screen name='Home' component={ MainScreen } />
			<BookTabNav.Screen component={ PostScreen } />
		</BookTabNav.Navigator>
	);
}

const BootomNavigator = createBottomTabNavigator()




const Stack = createStackNavigator();

export default function Navigations() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={ {
					headerStyle: { backgroundColor: '#fff' },
					headerTintColor: Platform.OS === 'android' ? THEME.DANGER_COLOR : '#000',
				} }
			>
				<Stack.Screen component={ MainScreen } name='Home'
					options={ { backgroundColor: 'red' } }
				/>
				<Stack.Screen component={ Home } name='Homes'
					options={ { headerShown: false } }
				/>
				<Stack.Screen component={ PostScreen } name='PostScreen'
					options={ {} }
				/>
			</Stack.Navigator>
		</NavigationContainer >
	);
}


