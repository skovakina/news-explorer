import React from 'react';
import '../blocks/SavedNewsHeader.css';

export default function SavedNewsHeader() {
  return (
    <div className="saved-news__header">
      <div className="saved-news__header-box">
        <p>Saved articles</p>
        <h1>Elise, you have 5 saved articles</h1>
        <p>By keywords: Nature, Yellowstone, and 2 other</p>
      </div>
    </div>
  );
}
