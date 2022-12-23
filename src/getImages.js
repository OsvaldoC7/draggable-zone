const URL = 'https://jsonplaceholder.typicode.com/photos'

export const getImagesFromAPI = async () => {
  try {
    const response = await fetch(URL)
    const data = await response.json()
  
    return data
  } catch (error) {
    console.log('Error', error);
  }
}