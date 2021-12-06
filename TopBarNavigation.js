import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MenuItems from './components/MenuItems';
import Beverages from './components/Beverages';

const Tab = createMaterialTopTabNavigator();


export default function TopBarNavigation({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Home",
        })
    }, [navigation])
    return (
            
            <Tab.Navigator initialRouteName={MenuItems}>
                <Tab.Screen name="Food" component={MenuItems} options= {{tabBarLabel: 'Food', headerShown: false}}
                />
                <Tab.Screen name="Beverages" component={Beverages} options={{ tabBarLabel: 'Beverages' }} />
            </Tab.Navigator>
    )
}
