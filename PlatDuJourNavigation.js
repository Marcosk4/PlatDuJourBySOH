import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MenuItems from './components/MenuItems';
import Beverages from './components/Beverages';
import PlatDuJour from './components/PlatDuJour';

const Tab = createMaterialTopTabNavigator();


export default function TopBarNavigation({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Home",
        })
    }, [navigation])
    return (

        <Tab.Navigator initialRouteName={PlatDuJour}>
            <Tab.Screen name="Platter Of The Day" component={PlatDuJour} options={{ tabBarLabel: 'Food', headerShown: false }}
            />
            <Tab.Screen name="Beverages" component={Beverages} options={{ tabBarLabel: 'Beverages' }} />
        </Tab.Navigator>
    )
}
