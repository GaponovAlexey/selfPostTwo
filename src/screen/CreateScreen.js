import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export default function CreateScreen({ navigation }) {

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: 'Create',
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
		<View style={styles.cont} >
			<Text>you</Text>
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
