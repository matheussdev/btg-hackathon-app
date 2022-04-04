import React from 'react';
import { Button, Image, Platform, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { InvestmentTips } from './pages/investmentTips';

import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwsome from '@expo/vector-icons/FontAwesome5'

const Stack = createStackNavigator();

import Logo from './assets/logo1.svg'
import theme from './theme';
import { Login } from './pages/login';

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="login"
          options={{
            headerStyle: {
              shadowOffset: {
                height: 0,
                width: 0,
              },
              backgroundColor: '#F2F2F2',
              borderBottomWidth: 0,
            },
            headerTitle: () => <Image style={{width: 110, height: 50}} source={require('./assets/logo.png')}/>,
            // headerShown: Platform.OS !== 'web'
          }} component={Login} />
        <Stack.Screen name="InvestmentTips"
          options={{
            headerTitle: "",
            headerStyle: {
              shadowOffset: {
                height: 0,
                width: 0,
              },
            },
            headerBackTitle: "Voltar",
            headerLeftContainerStyle: {paddingLeft: 6},
            // headerBackVisible: ,
            // headerLeft: () => <Ionicons.Button backgroundColor={'transparent'} color={theme.light.colors.primary} size={25} name="ios-chevron-back" />,
            // headerRight:()=> <FontAwsome.Button backgroundColor={'transparent'} color={theme.light.colors.primary} size={25} name="user-circle"/>
            headerRight: () => <Image style={{width: 110, height: 50}} source={require('./assets/logo.png')}/>,
            // headerShown: Platform.OS !== 'web'
          }} component={InvestmentTips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}