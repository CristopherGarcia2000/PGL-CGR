import { Magic } from "../types/MagicApi";
const MAGIC_URL = 'https://api.scryfall.com/cards/random';



const getInitRequest = (httpVerb: string): RequestInit => {
    const init: RequestInit = {
      method: httpVerb,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    return init;
  }

  export const getMagicImageUrl = async (totalImages:string): Promise<string[]> => {
    /*const response = await fetch(MAGIC_URL, getInitRequest('GET'))
    const json: Magic = await response.json();
    if (json != null) {
        return json.image_uris.normal
      }
    
      return '/assets/images/courage.png';
    
    }*/
  const images: string[] = [];
  let number = parseInt(totalImages)
  for (let i = 0; i < number; i++) {
    const response = await fetch(MAGIC_URL, getInitRequest('GET'));
    const json: Magic = await response.json();

    if (json != null) {
      images.push(json.image_uris.normal);
    } else {
      images.push('/assets/images/courage.png');
    }
  }
  return images 
}

  export const getCardText = async (): Promise<string> => {
    const response = await fetch(MAGIC_URL, getInitRequest('GET'))
    const json: Magic = await response.json();
    if (json != null) {
        return json.oracle_text
      }
    
      return '/assets/images/courage.png';
    
    }