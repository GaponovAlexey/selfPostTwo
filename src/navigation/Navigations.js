import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import PostScreen from '../screen/PostScreen';
import MainScreen from '../screen/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { THEME } from '../THEME';

const Stack = createStackNavigator();

export default function Navigations() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				style={ styles.main }
				screenOptions={ {
					headerStyle: { backgroundColor: '#000' },
					headerTintColor: Platform.OS === 'android' ? THEME.DANGER_COLOR : '#000',

				} }
			>
				<Stack.Screen component={ MainScreen } name='Home'
					options={ { backgroundColor: 'red' } }
				/>
				<Stack.Screen component={ PostScreen } name='PostScreen'
				/>
			</Stack.Navigator>
		</NavigationContainer >
	);
}

const styles = StyleSheet.create({
	main: {
		padding: 55,
		paddingHorizontal: 5,
		paddingVertical: 5,
	}
})
