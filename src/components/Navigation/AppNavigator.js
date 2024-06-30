import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import NumLoginScreen from '../Screens/NumLoginScreen';
import OTPVerificationScreen from '../Screens/OTPVerificationScreen';
import SignInScreen from '../Screens/SignInScreen';
import BookingScreen from '../customizeComponents/BookingScreen';
import MenuPage from '../Screens/MenuPage';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="NumLoginScreen" component={NumLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="MenuPage" component={MenuPage} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
