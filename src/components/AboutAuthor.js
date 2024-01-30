import React from 'react';
import '../blocks/AboutAuthor.css';

export default function AboutAuthor() {
  return (
    <section className="about">
      <image src="" className="about__image"></image>
      <div className="about__content">
        <h2 className="about__title">About the Author</h2>
        <p className="about__desription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="about__desription">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
