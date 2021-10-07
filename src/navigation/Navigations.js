import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import PostScreen from '../screen/PostScreen';
import MainScreen from '../screen/MainScreen';
import { THEME } from '../THEME';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutScreen } from '../screen/AboutScreen';
import { Ionicons } from '@expo/vector-icons';
import BookedScreen from '../screen/BookedScreen';


const Tab = createBottomTabNavigator()

export default function Navigations() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={ {
					headerStyle: { backgroundColor: '#fff' },
					headerTintColor: Platform.OS === 'android' ? THEME.DANGER_COLOR : '#000',
				} }
			>
				<Tab.Screen name='Home' component={ MainScreen } options={ {
					tabBarIcon: color =>
						<Ionicons name='ios-albums' size={ 25 } color={ color.color } />
				} } />

				<Tab.Screen name='PostScreen' component={ PostScreen } options={ {
					tabBarIcon: color => <Ionicons name='ios-star' size={ 25 } color={ color.color } />
				} } />
				<Tab.Screen name='BookedScreen' component={ BookedScreen } options={ {
					tabBarIcon: color => <Ionicons name='ios-star' size={ 25 } color={ color.color } />
				} } />
				
			</Tab.Navigator>
		</NavigationContainer >
	);
}


