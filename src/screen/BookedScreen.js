import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from '../data';

export default function BookedScreen({ navigation }) {
	const openPostHandler = post => {
		navigation.navigate('PostScreen',
			{ postId: post.id, date: post.date, booked: post.booked, })
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
						onPress={ () => navigation.openDrawer() } />
				</HeaderButtons>),
		})
	}, [navigation]);

	const data = DATA.filter(post => post.booked)

	return (
		<PostList data={ data } onOpen={ openPostHandler } />
	)
}

