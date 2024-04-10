import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {
    const [images, setImges] = useState([]);


    const getImages = async () => {
        const newImages = await getGifs(category);
        setImges(newImages);
  
    }
    useEffect(() => {
        getImages();
    }, []);
    
    return{
        images,
        isLoading: false
    }
}

