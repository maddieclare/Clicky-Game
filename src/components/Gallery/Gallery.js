import React from "react";
import Image from "../Image/Image";
import imageArray from "../../images";
import "./Gallery.css";

import "../../../node_modules/uikit/dist/css/uikit.css";
import "uikit";

let score = 0;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.shuffleImages(imageArray)
    };
  }

  shuffleImages(images) {
    let counter = images.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;

      let temp = images[counter];
      images[counter] = images[index];
      images[index] = temp;
    }
    return images;
  }

  handleClick(image) {
    if (image.clicked === false) {
      image.clicked = true;
      score += 1;
      alert("Correct! Your score is " + score);
    } else {
      score === 0 ? (score = 0) : (score -= 1);
      alert("You already clicked that one! Current score: " + score);
    }
    const images = imageArray.slice();
    this.setState({
      images: this.shuffleImages(images)
    });
  }

  renderImage(image) {
    return (
      <Image
        key={image.url}
        src={image.url}
        alt={image.name}
        onClick={() => this.handleClick(image)}
      />
    );
  }

  render() {
    return (
      <div>
        <div
          className="image-grid uk-child-width-1-3@s uk-child-width-1-4@m"
          uk-grid
        >
          {this.state.images.map(i => this.renderImage(i))}
        </div>
      </div>
    );
  }
}

export default Gallery;
