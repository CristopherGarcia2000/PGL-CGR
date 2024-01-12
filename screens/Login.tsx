import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Dimensions, Alert } from 'react-native'
import React, { useContext } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { userContext } from '../components/UserContext'
import { Login, LoginResponse } from '../types/UserTypes'
import { postLoginUser } from '../services/UserLoginService'

const image = require("../assets/Background.jpg")

type LoginProp = {
  navigation: StackNavigationProp<any>
}

const LoginScreen: React.FC<LoginProp> = ({ navigation }) => {

  let { loginUser, handleLoginResponse, handleLoginUser, toggleIsLoggedIn } = React.useContext(userContext)

  const handleInputChange = (field: string, value: string) => {
    handleLoginUser({ ...loginUser, [field]: value });
  };

  const handleLogin = async () => {
    const loggedUser: Login = {
      name: loginUser.name,
      password: loginUser.password
    }
    if (loggedUser.name == '' || loggedUser.password == '') {
      Alert.alert('No puede dejar campos vacíos')
    }
    else {
      const loginUser: LoginResponse = await postLoginUser(loggedUser)
      if (loginUser != null) {
        handleLoginResponse(loginUser)
        toggleIsLoggedIn();
        navigation.navigate("Bienvenida")
      } else {
        Alert.alert("Ese usuario no existe")
      }
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageStyle}>
        <Text style={styles.loginStyle}>LOGIN</Text>
        <View style={styles.formContainer}>
          <Text style={styles.textStyle}>Usuario</Text>
          <TextInput style={styles.placeHolderStyle} placeholder='xX_Manolit_Xx' value={loginUser.name} onChangeText={(text) => handleInputChange('name', text)} />
          <Text style={styles.textStyle}>Contraseña</Text>
          <TextInput style={styles.placeHolderStyle} placeholder='No uses 1234' secureTextEntry value={loginUser.password} onChangeText={(text) => handleInputChange('password', text)} />
        </View>
        <TouchableOpacity style={styles.pressableStyle} onPress={() => { handleLogin() }}>
          <Text style={styles.buttonTextStyle}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginStyle: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 50,
    color: 'white',
  },
  pressableStyle: {
    backgroundColor: "#5EADBF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    top: 550,
    width: "50%",
    alignItems: "center",
    alignSelf: "center",
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  placeHolderStyle: {
    paddingLeft: 10,
    paddingBottom: 10
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  formContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    top: 290,
    backgroundColor: 'rgba(46, 138, 212, 0.3)',
    width: '60%',
    height: '20%'
  },
})