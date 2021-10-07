import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export function AboutScreen({ navigation }) {


	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: 'About',
			
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
		<View style={ styles.cont } >
			<Text>this is the best app for privat hotes,becouse hes creator Alexey </Text>
			<Text>Version App 0.1</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})