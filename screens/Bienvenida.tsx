import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'


type BienvenidaProp ={
  navigation: StackNavigationProp<any>
}

const image = require("../assets/Background.jpg")
const Bienvenida:React.FC<BienvenidaProp> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageStyle}>
        <Text style={styles.welcomeStyle}>Bienvenido</Text>
        <Text style={styles.messageStyle}>Inicia sesión y descubre esta increíble app</Text>
        <TouchableOpacity style={styles.pressableStyle} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textStyle}>LOGIN</Text>
        </TouchableOpacity>
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
  }
})