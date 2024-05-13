import React, { useEffect, useState, Fragment } from "react";
import { fetchGallery } from "../api/fetchGallery.js";

function Galleria() {
  const [gallery, setGallery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    async function getPhotos() {
      try {
        const photosCollections = await fetchGallery();
        setGallery(photosCollections);
      } catch (error) {
        console.log("Errore");
      }
    }
    if (gallery.length === 0) getPhotos();
  });

  const handleClick = (image) => {
    setShowModal(!showModal);
    setImage(image);
  };

  return (
    <Fragment>
      {/* {console.log(gallery)} */}
      <h2>Galleria Random</h2>

      <div className="spazio">
        {gallery.map((ph, index) => {
          if (index % 3 === 0 || index === 0) {
            return (
              <div key={index} className="galleria">
                {gallery
                  .slice(index - (index % 3), index - (index % 3) + 3)
                  .map((photo, indexPh) => {
                    return (
                      <img
                        key={indexPh}
                        src={photo.urls.thumb}
                        className="immagine"
                        alt="ciao"
                        onClick={() => handleClick(photo.urls.thumb)}
                      />
                    );
                  })}
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* modale */}
      {showModal && (
        <div className="modal">
          <span className="close" onClick={() => setShowModal(false)}>
              X
            </span>
          <div className="modal-content">
            <img className="immagine-modale" alt="immagine" src={image} />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Galleria;
