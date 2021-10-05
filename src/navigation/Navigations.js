import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from '../screen/PostScreen';

const Stack = createNativeStackNavigator();

export default function Navigations() {
	return (
		<NavigationContainer>
			<Stack.Navigator name='postScreen' component={ PostScreen } />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({})
