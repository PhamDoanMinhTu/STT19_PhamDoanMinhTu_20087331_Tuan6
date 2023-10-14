import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A from "../lab3/screen/s1"
import B from "../lab3/screen/s2"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <A/>
    <NavigationContainer>
      
        <Stack.Navigator initialRouteName=''>
          <Stack.Screen name='A' component={A}/>
          <Stack.Screen name='B' component={B}/>
        </Stack.Navigator>


    </NavigationContainer>

  );
}