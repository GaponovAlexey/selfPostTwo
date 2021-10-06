import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { Post } from '../components/Post';
import { DATA } from '../data';
import { THEME } from '../THEME';


export default function MainScreen({ route, navigation }) {
	const openPostHandler = post => {
		navigation.navigate('PostScreen', { postId: post.id, date: post.date, booked: post.booked, })
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons left HeaderButtonComponent={ AppHeaderIcon }>
					<Item
						title='Test'
						iconName='ios-camera'
						onPress={ () => console.log('icon') } />
				</HeaderButtons>),
			headerLeft: () => (
				<HeaderButtons left HeaderButtonComponent={ AppHeaderIcon }>
					<Item
						title='Togle'
						iconName='ios-menu'
						onPress={ () => console.log('icon') } />
				</HeaderButtons>),
		})
	}, [navigation]);


	return (
		<View>
			<FlatList
				style={ styles.wraper }
				data={ DATA }
				keyExtractor={ item => item.id.toString() }
				renderItem={ ({ item }) => <Post post={ item } onOpen={ openPostHandler } /> }

			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wraper: {
		padding: 10,
	}
})
