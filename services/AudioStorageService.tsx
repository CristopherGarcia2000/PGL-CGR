import AsyncStorage from '@react-native-async-storage/async-storage';
import AudioItem from '../types/AudioTypes';

const KEY_NAME:string = 'audioList'

export const saveAudioList =async (audioList:AudioItem[]) => {
    try {
        const jsonValue = JSON.stringify(audioList);
        await AsyncStorage.setItem(KEY_NAME, jsonValue); 
    } catch (error) {
        console.error(error)
    }
}
export const getAudioList =async () : Promise<AudioItem[] | null>=> {
    try {
        const jsonValue = await AsyncStorage.getItem(KEY_NAME)
        return jsonValue != null ? JSON.parse(jsonValue) : null
      } catch(e) {
        console.error(e)
      }
      return null
}
export const removeAudioList =async () => {
    try {
        await AsyncStorage.removeItem(KEY_NAME)
      } catch(e) {
        console.log(e)
      }
      console.log('Done.')
}