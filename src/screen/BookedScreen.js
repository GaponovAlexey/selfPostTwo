import React, { useEffect, useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import store from '../store';
import { LoadPosts } from '../store/actions/actions';
useSelector
export default function BookedScreen({ navigation }) {
	const openPostHandler = post => {
		navigation.navigate('PostScreen',
			{ postId: post.id, date: post.date, booked: post.booked, })
	}
	//const dispatch = useDispatch()
	//useEffect(() => {
	//	dispatch(LoadPosts())
	//}, [dispatch])


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
						onPress={ () => navigation.openDrawer() } />
				</HeaderButtons>),
		})
	}, [navigation]);
	const data = useSelector(store => store.post.bookedPosts)

	return (
		<PostList data={ data } onOpen={ openPostHandler } />
	)
}

