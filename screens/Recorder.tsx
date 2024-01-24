import { Button, Pressable, StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Audio } from 'expo-av';
import { Recording } from 'expo-av/build/Audio';
import AudioItem from '../types/AudioTypes';
import { getAudioList, removeAudioList, saveAudioList } from '../services/AudioStorageService';
import { AntDesign } from '@expo/vector-icons';

const Recorder = () => {
    const image = require("../assets/Background.jpg")
    const [audio, setAudio] = useState<Recording>();
    const [audioList, setAudioList] = useState<AudioItem[]>([]);
    const [mensaje, setMensaje] = useState("Pulsa para grabar")

    useEffect(() => {
        const getAudios = async () => {
            const audios: AudioItem[] | null = await getAudioList();
            if (audios != null) {
                setAudioList(audios);
            }
        };

        getAudios();
    }, []);


    async function startRecording() {
        try {
            const permission = await Audio.requestPermissionsAsync();
            if (permission.granted) {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                })
                const { recording } = await Audio.Recording.createAsync(
                    Audio.RecordingOptionsPresets.HIGH_QUALITY
                )
                setAudio(recording)
                setMensaje("Grabando...")
            } else {
                setMensaje("Acepta los permisos si quieres grabar")
            }
        } catch (error) {
            console.error('Fallo al empezar a grabar', error)
        }
    }
    async function stopRecording() {
        if (audio) {
            await audio.stopAndUnloadAsync();
            const { sound, status } = await audio.createNewLoadedSoundAsync();

            if ("durationMillis" in status) {
                const newRecording: AudioItem = {
                    duration: getDurationFormatted(status.durationMillis!),
                    file: audio.getURI(),
                };

                setAudioList((prev) => [...prev, newRecording]);
                await saveAudioList([...audioList, newRecording]);
            }

            setAudio(undefined);
            setMensaje("Pulsa para grabar");
        }
    }

    async function removeRecordings() {
        await removeAudioList()
        setAudioList([])
    }

    function getDurationFormatted(millis: number): string {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes)
        const seconds = Math.round((minutes - minutesDisplay) * 60)
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds
        return `${minutesDisplay}:${secondsDisplay}`
    }

    const playAudio = async (recordFile: AudioItem): Promise<void> => {
        const playbackObject = new Audio.Sound();
        if (recordFile.file != null) {
            await playbackObject.loadAsync({ uri: recordFile.file })
            await playbackObject.playAsync();
        }

    }

    function getRecordingLines(): JSX.Element | JSX.Element[] {
        return audioList.map((recordingLine, index) => {
            return (

                <View key={index} style={styles.row}>
                    <Text style={styles.fill}>Grabación {index + 1} - {recordingLine.duration}</Text>
                    <Pressable
                        onPress={() => playAudio(recordingLine)}
                    >
                        <AntDesign name="caretright" size={24} color="white" style={styles.iconStyle} />
                    </Pressable>
                </View>

            )
        })
    }

    return (
        <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageStyle}>
                <Text style={styles.msgStyle}>{mensaje}</Text>
                <Pressable onPress={audio ? stopRecording : startRecording} style={styles.recordingStyle} >
                    <Text style={styles.buttonTextStyle}>{audio ? 'Parar Grabación' : 'Iniciar Grabación'}</Text>
                </Pressable>
                <ScrollView>
                    {getRecordingLines()}
                </ScrollView>

                <Pressable onPress={() => removeRecordings()} style={styles.deleteStyle} >
                    <Text style={styles.buttonTextStyle}>Borrar Grabaciones</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Recorder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'black',
        margin:15,
        backgroundColor:'#5EADBF'
    },
    fill: {
        flex: 1,
        marginLeft: 15,
        marginBottom:15,
        marginTop:15,
        color:'white'
    },
    button: {
        marginRight:15,
        backgroundColor:'#2C5159',
        width:'15%',
        height:'50%'
        
    },
    imageStyle: {
        height: '100%',
        width: '100%'
    },
    msgStyle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    recordingStyle:{
        backgroundColor:'#5EADBF',
        width:'50%',
        height:'4%',
        alignSelf:'center',
    },
    buttonTextStyle: {
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20
    },
    deleteStyle:{
        backgroundColor:'#5EADBF',
        width:'50%',
        height:'4%',
        alignSelf:'center',
        marginBottom:20
    },
    iconStyle: {
        color:"white",
        marginRight:15,
        
    }
})

