import { ImageBackground, Image , StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { userContext } from '../components/UserContext'


type BienvenidaProp ={
  navigation: StackNavigationProp<any>
}

const image = require("../assets/Background.jpg")
const Bienvenida:React.FC<BienvenidaProp> = ({navigation}) => {
  const {user,isLoggedIn} = React.useContext(userContext)
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageStyle}>
        {isLoggedIn?<Text style={styles.welcomeStyle}>Bienvenido, {user}</Text>:
        <Text style={styles.welcomeStyle}>Bienvenido</Text>}
        {isLoggedIn?
        <Text style={styles.messageStyle}>Tampoco hay nada muy interesante, iniciaste sesión pa' na'</Text>:
        <Text style={styles.messageStyle}>Inicia sesión y descubre esta increíble app</Text>}
        {isLoggedIn?<Image style={styles.iconStyle} source={require('../assets/peepo.png')}/>:
        <TouchableOpacity style={styles.pressableStyle} onPress={() => navigation.navigate("Login")}>
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
  pressableStyle: {
    backgroundColor: "#5EADBF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    bottom: 100,
    width: "50%",
    alignItems: "center",
    alignSelf: "center",
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
    alignSelf:'center'
  }
})