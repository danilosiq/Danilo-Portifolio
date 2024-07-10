import React from 'react';
import tec from "./tecpuc.jpeg";
import "./Certificados.css";
import oct from "./octopus.jpeg";
import udemy from "./udemy.jpeg";

const ZoomTEC = ({closeZoom}) => {
  return (
    <div className='zoom' onClick={closeZoom}>
      <img src={ListPhotos[0].src} className="vertical" alt="Vertical" />
      <img src={ListPhotos[1].src} alt="Image 1" />
      <img src={ListPhotos[2].src} alt="Image 2" />
    </div>
  );
}

export default ZoomTEC;

export const ListPhotos = [
  {
    src: tec
  },
  {
    src: oct
  },
  {
    src: udemy
  },
];
