import { FlatList, ImageURISource, Image , Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { getCardText, getMagicImageUrl } from '../services/magicCardService'

const MagicCards = () => {
  let [displaySpinner, setDisplaySpinner] = useState<boolean>(false);
  let [totalCardText, setTotalCardText] = useState<string>("1");
  let [cardText, setCardText] = useState<string>("");
  let [cardImage, setCardImage] = useState<string[]>([]);

  const fetchCardText = () => {
    const fetchData = async () => {
      setDisplaySpinner(true)
      const newCardImageURL:string[] =  await getMagicImageUrl(totalCardText)
      setCardImage(newCardImageURL)
      //const newCardImageURL:ImageURISource = {'uri': await getMagicImageUrl(totalCardText)}
      //setCardImage(newCardImageURL)

      const newCardText = await getCardText()
      setCardText(newCardText)

      setDisplaySpinner(false)
    }
    fetchData();
  }
  /* <Image
  style={styles.cardImage}
  source={cardImage}
/>*/
  return (
    <View style={styles.screenContainer}>
      <Spinner
        visible={displaySpinner}
        textContent={'Requesting Magic cards...'}
        textStyle={{ color: '#FFF' }}
      />
      <Text style={styles.title}>Generador de Cartas Aleatorias</Text>
      <TextInput
        style={styles.factsInput}
        onChangeText={setTotalCardText}
        value={totalCardText}
        placeholder="Inserta un número"
        keyboardType="numeric"
      />
      <Pressable
        onPress={fetchCardText}
        style={styles.submitButton}
        accessibilityLabel="Generate Card"
      >
        <Text style={styles.buttonText}> Generar Carta/s </Text>
      </Pressable>
      <FlatList
        style={styles.factsContainer}
        data={cardImage}
        renderItem={({ item }) => (
          <Image style={styles.cardImage} source={{ uri: item }} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.fact}>{cardText}</Text>
    </View>
  )
}

export default MagicCards

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingVertical: 10
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  factsInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,

  },
  submitButton: {
    backgroundColor: "#5EADBF",
    color: "white",
    width: '50%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    textTransform: 'uppercase'
  },
  cardImage: {
    width: 190,
    height: 270,
    alignSelf: 'center',
    marginTop: 30
  },
  factsContainer: {
    display: 'flex',
    marginVertical: 10
  },
  fact: {
    width: '90%',
    backgroundColor: "#5EADBF",
    margin: 5,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
})