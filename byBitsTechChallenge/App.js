import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//React Naviagtion//
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens//
import Login from './components/Login.js';
import Policy from './components/Policy';

//Create Stack Navigator//
const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Login"
            component={Login}
          />
          <Stack.Screen
            name = "Policy"
            component={Policy}
          />
        </Stack.Navigator>
      </NavigationContainer>

    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
