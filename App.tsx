import React,{useEffect} from "react"
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from "./src/components/Navigation/AppNavigator";
import PaymentScreen from "./src/components/Screens/PaymentScreen";
import Firebase from "./src/components/customizeComponents/Firebase";
import NumLoginScreen from "./src/components/Screens/NumLoginScreen";
import SignInScreen from "./src/components/Screens/SignInScreen";
import BookingScreen from "./src/components/customizeComponents/BookingScreen";

const Stack = createNativeStackNavigator();


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
       <View style={{ flex: 1 }}>
     <AppNavigator />
    </View>
  )
}

export default App
