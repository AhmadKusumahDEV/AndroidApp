/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './SRC/home'; // import page home dan TicTac
import Tictac from './SRC/tictac';

export type RootParms = {
  TicTac: any;
  Home: any;
};

const Stack = createNativeStackNavigator<RootParms>();

function App() {
  // menampilkan setiap page
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TicTac" component={Tictac} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
