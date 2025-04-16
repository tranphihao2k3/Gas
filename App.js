import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigator} from './src/navigation/StackNavigator';
import BottomTabNavigator from "./src/navigation/TabNavigator";
import "./src/global.css"
export default function App() {
  return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  );
}
