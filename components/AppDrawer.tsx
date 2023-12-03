import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import Bienvenida from '../screens/Bienvenida';
import Login from '../screens/Login';
import { userContext } from './UserContext';
import Portfolio from '../screens/Portfolio';
import TabNavigation from './TabNavigation';


const image = require("../assets/Background.jpg")
const Drawer = createDrawerNavigator(); 

const AppDrawer = () => {
    const {isLoggedIn} = React.useContext(userContext)
    const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
        headerTitle: "PGL-CGR",
        headerTitleAlign: "center",
        headerTitleStyle: {
            color:'white'
        },
        headerStyle: {
          backgroundColor: "#5EADBF",
        },
        headerTintColor: "black",
        drawerItemStyle: {
          width: "100%",
          backgroundColor: "#5EADBF"
        },
        drawerStyle:{
            backgroundColor: "#5EADBF"
        },
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "yellow",
        drawerInactiveTintColor: "#2C5159",
        drawerInactiveBackgroundColor: "red",
        drawerType:"slide",
      };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageStyle}>
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home" screenOptions={drawerNavigatorScreenOptions}>
            <Drawer.Screen name="Bienvenida" component={Bienvenida} />
            {isLoggedIn?
            <Drawer.Screen name="Portfolio" component={TabNavigation} />:
            <Drawer.Screen name="Login" component={Login} />
            }
          </Drawer.Navigator>
      </NavigationContainer>   
      </ImageBackground>
    </View>
  )
}

export default AppDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageStyle: {
        flex:1,
        width:'100%'
      }
})