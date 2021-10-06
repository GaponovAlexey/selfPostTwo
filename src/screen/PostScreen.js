import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function PostScreen({ route, navigation }) {
	//console.log(route.params);
	const postId = route.params.postId
	const date = route.params.date
	console.log(postId);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: 'Title ' + new Date(date).toLocaleDateString()
		});
	}, [route, navigation])


	return (
		<View>
			<Text>{ postId }</Text>
		</View>
	)
}


const styles = StyleSheet.create({})
