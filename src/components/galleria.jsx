import React, { useEffect, useState } from 'react'
import {fetchGallery} from '../api/fetchGallery.js'

function Galleria() {

    const [gallery, setGallery] = useState([])

    // ogni volta che refreshi aggiunge nuovamente i 10 elementi
    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = async () => {
        try {
            const photosCollections = await fetchGallery()
            // qua vedi sempre e solo i 10 elementi
            console.log('lista foto', photosCollections);
            for (let i = 0; i < photosCollections.length; i++) {
                const photo = photosCollections[i];
                gallery.push(photo)
            }
            // qua si aggiungono 10 elementi ogni volta che refreshi
            console.log('gallery', gallery);
            setGallery(gallery)
        } catch (error) {
            console.log('Errore');
        }
    }
    

  return (
    <>
        <h2>Galleria Random</h2>

    </>
  )
}

export default Galleria