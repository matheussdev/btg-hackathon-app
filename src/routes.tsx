import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Chat } from './pages/chat';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}