import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from '../data';


export default function MainScreen({ navigation }) {
	const openPostHandler = post => {
		navigation.navigate('PostScreen',
			{ postId: post.id, date: post.date, booked: post.booked, })
	}

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
		<PostList data={ DATA } onOpen={ openPostHandler } />
	)
}

