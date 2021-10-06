import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';


export function AppHeaderIcon(props) {
	return (
		<HeaderButton
			{ ...props }
			iconSize={ 24 }
			color='blue'
			
			IconComponent={ Ionicons }
		/>
	)
}

const styles = StyleSheet.create({})
