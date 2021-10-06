import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { Post } from '../components/Post';
import { DATA } from '../data';
import { THEME } from '../THEME';

export default function MainScreen({ route, navigation }) {
	const openPostHandler = post => {
		navigation.navigate('PostScreen', { postId: post.id, date: post.date })
	}
	//useLayoutEffect(() => {
	//	navigation.setOptions({
	//		headerTitle: 'da',
	//	});
	//}, [route, navigation]);


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
