/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar, YellowBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/container/HomeScreen';
import DetailScreen from './src/container/DetailScreen';
import LoginScreen from './src/container/LoginScreen';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// const store = createStore()
YellowBox.ignoreWarnings(['Remote debugger']);

const Stack = createStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>


  );
};

export default App;
