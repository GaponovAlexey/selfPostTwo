import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Post } from './Post'

export function PostList({ data, onOpen}) {
	return (
		<View>
			<FlatList
				style={ styles.wraper }
				data={ data }
				keyExtractor={ item => item.id.toString() }
				renderItem={ ({ item }) => <Post post={ item } onOpen={ onOpen } /> }
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wraper: {
		padding: 10,
	}
})
