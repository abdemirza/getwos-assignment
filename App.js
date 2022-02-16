import { View, Text } from 'react-native'
import React from 'react'
import StorageAccess from './src/components/StorageAccess'
import Cast from './src/components/Cast';

export default function App() {
  return (
    <View>
      <Cast />
      <StorageAccess />
    </View>
  )
}