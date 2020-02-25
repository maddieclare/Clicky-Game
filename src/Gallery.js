//@ts-check

// FUNCTIONALITY
import React from "react";
import axios from "axios";
import Image from "./Image";

// STYLES
import "../node_modules/uikit/dist/css/uikit.css";
import "uikit";
import "./App.css";

let Gallery = () => {
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);

  const fetchImages = (count = 12) => {
    const apiRoot = "https://api.unsplash.com";
    const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${apiKey}&count=${count}`)
      .then(results => {
        setImages([...images, ...results.data]);
        setIsLoaded(true);
      });
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container">
      <div className="uk-header game-header">
        <h1>CLICKY GAME</h1>
        <p>Click the images to score, but don't click on the same image twice!</p>
      </div>
      <div>
        <div
          className="image-grid uk-child-width-1-3@s uk-child-width-1-4@m"
          uk-grid="masonry: true"
        >
          {images.map((image, index) => (
            <Image
              url={image.urls.thumb}
              id={image.id}
              alt={image.description}
              key={index}
              status="unclicked"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
