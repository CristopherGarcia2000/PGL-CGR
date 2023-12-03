import React from 'react'
import Portfolio from '../screens/Portfolio'
import QR from '../screens/QR'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const tabNavigatorScreenOptions: BottomTabNavigationOptions = {
        headerShown: false,
        tabBarInactiveTintColor: 'white',
        tabBarInactiveBackgroundColor: '#2C5159',
        tabBarActiveBackgroundColor:'#5EADBF',
        tabBarActiveTintColor: 'white',
        tabBarShowLabel: true,
      }
      const QROptions = (): BottomTabNavigationOptions => {
        return ({
          tabBarIcon: () => <AntDesign name="qrcode" size={24} color="white"/>
        })
      }
      const PortfolioOptions = (): BottomTabNavigationOptions => {
        return ({
          tabBarIcon: () => <Entypo name="emoji-flirt" size={24} color="white" />
        })
      }
    return (
            <Tab.Navigator screenOptions={tabNavigatorScreenOptions} >
                <Tab.Screen name='Info' component={Portfolio} options={PortfolioOptions}/>
                <Tab.Screen name='QR' component={QR} options={QROptions}/>
            </Tab.Navigator>
    )
}

export default TabNavigation