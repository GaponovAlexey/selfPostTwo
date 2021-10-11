import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { TogglBooked } from '../store/actions/actions'
import { THEME } from '../THEME'
import { AboutScreen } from './AboutScreen'

export default function PostScreen({ route, navigation }) {
	const postId = route.params.postId
	const date = route.params.date
	//const booked = route.params.booked
	const post = DATA.find(p => p.id === postId)


	const dispatch = useDispatch()

	const toogleHandler = useCallback(() => {
		dispatch(TogglBooked(postId))
	}, [dispatch, postId])

	useLayoutEffect(() => {
		route.params.booked
	}, [booked])


	const booked = useSelector(state =>
		state.post.bookedPosts.some(post => post.id === postId))




	const removeHandler = () => {
		Alert.alert('delete', 'are you really delete', [
			{ text: 'Cansel', style: 'cancel' },
			{ text: 'ok', onPress: () => console.log('delete') }
		], { cancelable: false })
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			tabBarLabel: 'all',
			headerTitle: 'title' + new Date(date).toLocaleDateString(),
			headerRight: () => (
				<HeaderButtons left HeaderButtonComponent={ AppHeaderIcon }>
					<Item
						title='Test'
						iconName={ booked ? 'ios-star' : 'ios-star-outline' }
						onPress={ toogleHandler } />
				</HeaderButtons>),
		})
	}, [navigation]);


	return (
		<ScrollView>
			<Image style={ styles.img } source={ { uri: post.img } } />
			<View style={ styles.textWrap } >
				<Text style={ styles.title } >
					{ post.text.repeat(1) }
				</Text>
			</View>
			<Button title='delete' color={ THEME.DANGER_COLOR } onPress={ removeHandler } />
		</ScrollView>
	)
}


const styles = StyleSheet.create({
	img: {
		width: '100%',
		height: 200,
	},
	textWrap: {
		padding: 10,
	},
	title: {

	}
})
