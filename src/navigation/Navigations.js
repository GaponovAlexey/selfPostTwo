import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import PostScreen from '../screen/PostScreen';
import MainScreen from '../screen/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigations() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen component={ MainScreen } name='Home'
					options={ ({ route }) => ({ headerTitle: (route) }) }
					//options={  }
				/>
				<Stack.Screen component={ PostScreen } name='PostScreen'
					options={ { headerTitle: 'myBlog' } } />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({})
