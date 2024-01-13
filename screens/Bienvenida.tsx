import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { userContext } from '../components/UserContext'
import { postLogoutUser } from '../services/UserLoginService'
import { Login, Logout } from '../types/UserTypes'


type BienvenidaProp = {
  navigation: StackNavigationProp<any>
}

const image = require("../assets/Background.jpg")
const Bienvenida: React.FC<BienvenidaProp> = ({ navigation }) => {
  const { user,loginUser,handleLoginUser, isLoggedIn, toggleIsLoggedIn } = React.useContext(userContext)

  const handleLogOut = async () => {
    const msg: Logout = await postLogoutUser();
    if (msg != null) {
      const noUser:Login = {name:'',password:''}
      handleLoginUser(noUser)
      toggleIsLoggedIn()
      Alert.alert(
        'Sesión cerrada',
        msg.message,
        [
          { text: 'OK', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Bienvenida' }] }) }
        ]
      );
    } else {
      Alert.alert('Error al cerrar sesión')
    }
  }
  const handleName = () => {
    if (loginUser.name == '') {
      return user.name
    } else {
      return loginUser.name
    }
  } 
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageStyle}>
      {isLoggedIn ? <TouchableOpacity style={styles.logoutStyle} onPress={() => handleLogOut()}>
            <Text style={styles.textStyle}>Cerrar Sesión</Text>
          </TouchableOpacity> : null
          
        }
        {isLoggedIn ? <Text style={styles.welcomeStyle}>Bienvenido,{handleName()}</Text> :
          <Text style={styles.welcomeStyle}>Bienvenido</Text>}
        {isLoggedIn ?
          <Text style={styles.messageStyle}>Tampoco hay nada muy interesante, iniciaste sesión pa' na'</Text> :
          <Text style={styles.messageStyle}>Inicia sesión y descubre esta increíble app</Text>}
        
        {isLoggedIn ? <Image style={styles.iconStyle} source={require('../assets/peepo.png')} /> :
          <TouchableOpacity style={styles.registerStyle} onPress={() => navigation.navigate("Register")}>
            <Text style={styles.textStyle}>REGISTER</Text>
          </TouchableOpacity>
        }
        {isLoggedIn ? null :
          <TouchableOpacity style={styles.loginStyle} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textStyle}>LOGIN</Text>
          </TouchableOpacity>
        }
      </ImageBackground>
    </View>
  )
}

export default Bienvenida

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeStyle: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 50,
    color: 'white',
  },
  messageStyle: {
    textAlign: 'center',
    marginTop: 320,
    color: 'white',
    fontSize: 25
  },
  registerStyle: {
    backgroundColor: "#5EADBF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    left: 15,
    bottom: 100,
    width: "45%",
    alignItems: "center",
    alignSelf: 'flex-start',
  },
  loginStyle: {
    backgroundColor: "#5EADBF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    right: 15,
    bottom: 100,
    width: "45%",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  logoutStyle: {
  backgroundColor: "#5EADBF",
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 5,
  position: "absolute",
  top: 20,  
  right: 20,  
  alignItems: "center",
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageStyle: {
    flex: 1,
    width: '100%'
  },
  iconStyle: {
    alignSelf: 'center'
  }
})