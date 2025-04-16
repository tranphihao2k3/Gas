import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/tab/HomeScreen';

import Detailproduct from "../screens/detailproduct";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detailproduct" component={Detailproduct}/>
        </Stack.Navigator>
    );
}

export {StackNavigator};