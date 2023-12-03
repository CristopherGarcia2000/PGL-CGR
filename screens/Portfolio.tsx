import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import QR from './QR';
import TabNavigation from '../components/TabNavigation';

const Tab = createBottomTabNavigator();

const Portfolio = () => {
    return (
        <View>
            <ImageBackground source={require("./../assets/shaco-dance.gif")} resizeMode='cover'>
                <View style={styles.profileStyle}>
                    <Image style={styles.avatar} source={require('./../assets/Shaco.jpg')} />
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle}>
                            😈¿Qué tal un truco de Magia?😈
                        </Text>
                        <Text style={styles.textStyle}>
                            Fui fabricado hace mucho tiempo para entretener a un príncipe solitario, pero ahora me regocijo en la muerte y el caos.
                        </Text>
                    </View>
                </View>
                <Text style={styles.titleStyle}>
                    Top 10 cosas favoritas:
                </Text>
                <ScrollView style={{ padding: 10, height: '66%' }}>
                    <Text style={styles.textStyles}>Puñaladas en la espalda</Text>
                    <Text style={styles.textStyles}>Cajitas de Juguete</Text>
                    <Text style={styles.textStyles}>Bailar</Text>
                    <Text style={styles.textStyles}>Lanzar Cuchillos</Text>
                    <Text style={styles.textStyles}>Acechar desde las Sombras</Text>
                    <Text style={styles.textStyles}>Bailar</Text>
                    <Text style={styles.textStyles}>Apuñalar</Text>
                    <Text style={styles.textStyles}>Hacer el Gusano</Text>
                    <Text style={styles.textStyles}>Trucos de Magia</Text>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Portfolio

const styles = StyleSheet.create({
    titleStyle: {
        color: '#2C5159',
        fontWeight: "900",
        textTransform: 'capitalize',
        fontSize: 20,
        textAlign: 'center'
    },
    textStyles: {
        padding: 20,
        color: '#5EADBF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 16,
        backgroundColor: 'transparent',

    },
    profileStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 100
    },
    textBox: {
        margin: 10,
        backgroundColor: '#5EADBF',
        padding: 10,
        borderRadius: 10,
        width: '70%'
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        color: "white"

    }
})