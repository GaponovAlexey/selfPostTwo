import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import PostScreen from '../screen/PostScreen';
import MainScreen from '../screen/MainScreen';
import { THEME } from '../THEME';
import { AboutScreen } from '../screen/AboutScreen';
import { Ionicons } from '@expo/vector-icons'; 
import BookedScreen from '../screen/BookedScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateScreen from '../screen/CreateScreen';

const Drow = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()



//stack
const StakHome = () => (
	<Stack.Navigator>
		<Stack.Screen name="Home" component={ MainScreen } />
		<Stack.Screen name="PostScreen" component={ PostScreen } />
	</Stack.Navigator>
)

const StakBookedScreen = () => (
	<Stack.Navigator>
		<Stack.Screen name="Home" component={ BookedScreen } />
		<Stack.Screen name="PostScreen" component={ PostScreen }  />
	</Stack.Navigator>
)

//tab
const TabNavigator = () => (
	<Tab.Navigator
		shifting={ true }
		screenOptions={ {
			headerStyle: { backgroundColor: '#fff' },
			headerTintColor: Platform.OS === 'android' ? THEME.DANGER_COLOR : '#000',
		} }
	>
		<Tab.Screen name='Homes' component={ StakHome } options={ {
			tabBarLabel: 'All',
			tabBarIcon: color =>
				<Ionicons name='ios-albums'
					size={ 25 } color={ color.color } />
		} } />

		<Tab.Screen name='BookedScreen' component={ StakBookedScreen } options={ {
			tabBarLabel: 'Favorites',
			tabBarIcon: color => <Ionicons name='ios-star'
				size={ 25 } color={ color.color } />
		} } />
	</Tab.Navigator>
)

const About = createStackNavigator()


const AboutNavigator = () => (
	<About.Navigator >
		<About.Screen name="About" component={ AboutScreen } />
	</About.Navigator>
)
const CreateNavigator = () => (
	<About.Navigator>
		<About.Screen name="Create" component={ CreateScreen } />
	</About.Navigator>
)
//drow
const DrowNavigators = () => (
	<Drow.Navigator
		screenOptions={ { headerShown: false } }
		defaultScreenOptions='Home'
		initialRouteName="Home"  >
		<Drow.Screen name="Title" component={ TabNavigator } options={ { drawerLabel: 'Главна', drawerIcon: () => <Ionicons name="star-half" size={ 15 } color="black" />  }} />
		<Drow.Screen name="AboutScreen" component={ AboutNavigator } options={ { drawerLabel: 'Инфо' } } />
		<Drow.Screen name="CreateScreen" component={ CreateNavigator } options={ { drawerLabel: 'Создать' } } />
	</Drow.Navigator>
)


export default function Navigations() {
	return (
		<NavigationContainer>
			<DrowNavigators />
		</NavigationContainer >
	);
}


