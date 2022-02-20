import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/state/store';
import StackNavigator from './src/navigation/StackNavigator';
import { LogBox } from 'react-native';
export default function App() {
  LogBox.ignoreLogs(['new NativeEventEmitter']);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
}
