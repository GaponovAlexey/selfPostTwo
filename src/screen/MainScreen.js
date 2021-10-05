import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function MainScreen({ route, navigation }) {
	const goPostScreen = () => {
		navigation.navigate('PostScreen', {})
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: 'da',
			headerStyle: { backgroundColor: 'red' }
		});
	}, [navigation, route]);


	return (
		<View>
			<Text>Main</Text>
			<Button title='post' onPress={ goPostScreen } />
		</View>
	)
}

const styles = StyleSheet.create({})
