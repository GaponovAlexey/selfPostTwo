import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from './src/navigation/Navigations';
import { Provider } from 'react-redux'
import store from './src/store/index'

export default function App() {
  return (
    <Provider store={ store } >
      <Navigations />
    </Provider>
  )
}

