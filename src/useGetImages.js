/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { getImagesFromAPI } from './getImages'

const useGetImages = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const data = await getImagesFromAPI()
    setImages(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

  return { images, isLoading }
}

export default useGetImages