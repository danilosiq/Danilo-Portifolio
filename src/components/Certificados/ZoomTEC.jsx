import React from 'react'
import tec from "./tecpuc.jpeg";
import "./Certificados.css";
import oct from "./octopus.jpeg";



const ZoomTEC = ({closeZoom}) => {
  return (
    <div className='zoom'onClick={closeZoom}>
      <img src={tec} alt="" />
      <img src={oct}alt="" />
    </div>
  )
}

export default ZoomTEC
