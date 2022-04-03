import React from 'react';
import { Button, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { InvestmentTips } from './pages/investmentTips';

import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwsome from '@expo/vector-icons/FontAwesome5'

const Stack = createStackNavigator();

import Logo from './assets/logo.svg'
import theme from './theme';

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InvestmentTips"
          options={{
            headerTitle: "",
            headerStyle: {
              shadowOffset: {
                height: 0,
                width: 0,
              },
            },
            headerLeft: () => <Ionicons.Button backgroundColor={'transparent'} color={theme.light.colors.primary} size={25} name="ios-chevron-back" />,
            // headerRight:()=> <FontAwsome.Button backgroundColor={'transparent'} color={theme.light.colors.primary} size={25} name="user-circle"/>
            headerRight: () => <Logo width={100} height={30} />
          }} component={InvestmentTips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}