import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

const QR = () => {
  return (
    <View style={styles.qrStyle}>
      <ImageBackground source={require("../assets/Background.jpg")} resizeMode="cover" style={styles.imageStyle}>
      <View style={styles.qrStyle}>
        <QRCode value='https://github.com/CristopherGarcia2000/PGL-CGR' size={200}/>
        <Text style={styles.textStyle}>Repositorio GitHub</Text>
      </View>
      </ImageBackground>
    </View>
  )
}

export default QR

const styles = StyleSheet.create({
  qrStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white'
  },
  imageStyle: {
    flex: 1,
    width: '100%'
  },
})