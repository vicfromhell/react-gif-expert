import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { useState } from "react";
// import { useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {


    const {images, isLoading} =  useFetchGifs(category);

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category)
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2> 
            }

            <div className="card-grid">

                {
                    images.map( (images) => (
                        <GifItem
                            key={images.id}
                            {...images}
                        />
                    ))
                }

            </div>
        </>
    )
}
