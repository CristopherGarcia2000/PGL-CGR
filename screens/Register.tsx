import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Dimensions, Alert } from 'react-native'
import React, { useContext } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { userContext } from '../components/UserContext'
import { Register } from '../types/UserTypes'
import { postRegisteredUser } from '../services/UserLoginService'

const image = require("../assets/Background.jpg")

type RegisterProp = {
  navigation: StackNavigationProp<any>
}

const RegisterScreen: React.FC<RegisterProp> = ({ navigation }) => {

  let { user, handleUser, toggleIsLoggedIn } = React.useContext(userContext)

  const handleInputChange = (field: string, value: string) => {
    handleUser({ ...user, [field]: value });
  };

  const handleRegister = async () => {
    const registeredUser: Register = {
      name: user.name,
      email: user.email,
      password: user.password
    }
    if (registeredUser.name == '' || registeredUser.email == '' || registeredUser.password == '') {
      Alert.alert('No puede dejar campos vacíos')
    }
    else {
      const newUser: Register = await postRegisteredUser(registeredUser)
      if (newUser != null) {
        handleUser(newUser)
        toggleIsLoggedIn();
        navigation.navigate("Bienvenida")
      } else {
        Alert.alert("Error al registrar el usuario")
      }
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageStyle}>
        <Text style={styles.loginStyle}>REGISTER</Text>
        <View style={styles.formContainer}>
          <Text style={styles.textStyle}>Usuario</Text>
          <TextInput style={styles.placeHolderStyle} placeholder='xX_Manolit_Xx' value={user.name} onChangeText={(text) => handleInputChange('name', text)} />
          <Text style={styles.textStyle}>Email</Text>
          <TextInput style={styles.placeHolderStyle} placeholder='manoLito@gmail.com' value={user.email} onChangeText={(text) => handleInputChange('email', text)} />
          <Text style={styles.textStyle}>Contraseña</Text>
          <TextInput style={styles.placeHolderStyle} placeholder='No uses 1234' secureTextEntry value={user.password} onChangeText={(text) => handleInputChange('password', text)} />
        </View>
        <TouchableOpacity style={styles.pressableStyle} onPress={() => {
          handleRegister();
        }}>
          <Text style={styles.buttonTextStyle}>REGISTER</Text>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

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
    height: '30%'
  },
})