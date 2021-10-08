import React, { useEffect, useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from '../data';
import { LoadPosts } from '../store/actions/actions';



export default function MainScreen({ navigation }) {
	const openPostHandler = post => {
		navigation.navigate('PostScreen',
			{ postId: post.id, date: post.date, booked: post.booked, })
	}

	const dispatch = useDispatch()

	useLayoutEffect(() => {
		dispatch(LoadPosts())
	}, [dispatch])

	const allPosts = useSelector(state => state.post.allPosts)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons left HeaderButtonComponent={ AppHeaderIcon }>
					<Item
						title='Take-Photo'
						iconName='ios-camera'
						onPress={ () => navigation.navigate('AboutScreen') } />
				</HeaderButtons>),
			headerLeft: () => (
				<HeaderButtons left HeaderButtonComponent={ AppHeaderIcon }>
					<Item
						title='Home'
						iconName='ios-menu'
						onPress={ () => navigation.openDrawer() } />
				</HeaderButtons>),
		})
	}, [navigation]);


	return (
		<PostList data={ allPosts } onOpen={ openPostHandler } />
	)
}

