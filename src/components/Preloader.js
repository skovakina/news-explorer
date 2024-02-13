import React from 'react';
import '../blocks/Preloader.css';

export default function Preloader() {
  return (
    <div className="circle-preloader">
      <div className="circle-preloader__animation"></div>
      <p className="circle-preloader__text"> Searching for news... </p>
    </div>
  );
}
