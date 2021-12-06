import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NativeDialogManagerAndroid from 'react-native/Libraries/NativeModules/specs/NativeDialogManagerAndroid';
import Home from './screens/Home';
import TopBarNavigation from './TopBarNavigation';
import Call from './screens/Call'
import Login from './screens/Login';
import Register from './screens/Register';
import PlatDuJourNavigation from './PlatDuJourNavigation'
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';
import OrderComplete from './screens/OrderComplete';
import Extras from './screens/Extras';
import Lite from './screens/Lite';
import Offers from './screens/Offers';
import Catering from './screens/Catering';

const Stack = createStackNavigator();
const store = configureStore();


export default function App() {
  return (
    <ReduxProvider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Platters"
          component={TopBarNavigation}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="Call"
          component={Call}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen 
          name="Plat Du Jour"
          component={PlatDuJourNavigation}
        />
          <Stack.Screen
            name="Order Complete"
            component={OrderComplete}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Catering"
            component={Catering}
          />
          <Stack.Screen
            name="Extras"
            component={Extras}
          />
          <Stack.Screen
            name="Lite"
            component={Lite}
          />
          <Stack.Screen
            name="Offers"
            component={Offers}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  );
}
