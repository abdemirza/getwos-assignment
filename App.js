import { View, Text } from 'react-native'
import React from 'react'
import StorageAccess from './src/components/StorageAccess'
import Cast from './src/components/Cast';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/state/store';

export default function App() {
  return (
    <Provider store={store}>

      <HomeScreen />
    </Provider>
  )
}