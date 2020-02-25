import React from "react";
import Stats from "./Stats"

export default function Image({ url, alt, id, status, key }) {
  const logImage = () => {
    if (status === "clicked") {
      alert("You've already clicked that one");
      Stats.score -= 1;
      alert("Current score: " + Stats.score);
      Stats.lives -= 1;
      alert("Lives remaining: " + Stats.lives);
      if (Stats.lives <= 0) {
        alert("You lose :(")
      }
      console.log(Stats.score);
    } else if (status === "unclicked") {
      Stats.score += 1;
      alert("Correct!");
      alert("Current score: " + Stats.score);
      status = "clicked";
    }
  };

  // Still need to figure out how to reshuffle images after each click event

  return (
    <div>
      <div
        className="image-item uk-flex uk-flex-center uk-flex-middle"
        status="unclicked"
        key={key}
      >
        <img
          className="random-image"
          src={url}
          alt={alt}
          id={id}
          onClick={logImage}
          status={status}
        />
      </div>
    </div>
  );
}
