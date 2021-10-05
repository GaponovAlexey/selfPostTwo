import { useNavigationContainerRef } from '@react-navigation/core';
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function MainScreen() {
	const navigationRef = useNavigationContainerRef();
	return (
		<View>
			<Text>Main</Text>
			<Button title='post' onPress={ () => navigationRef.navigate('postScreen') } />
		</View>
	)
}

const styles = StyleSheet.create({})
