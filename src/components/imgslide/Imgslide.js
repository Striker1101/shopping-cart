import React from "react";
import xmas from "../assets/xmas.jfif";
import xmas1 from "../assets/xmas1.jfif";
import xmas2 from "../assets/xmas2.jfif";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Imgslide() {
  const slideImages = [
    {
      url: "./assets/xmas.jfif",
      caption: "Slide 1",
    },
    {
      url: "./assets/xmas1.jfif",
      caption: "Slide 2",
    },
    {
      url: "./assets/xmas2.jfif",
      caption: "Slide 3",
    },
  ];
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
