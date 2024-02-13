import React from 'react';
import '../blocks/AboutAuthor.css';

export default function AboutAuthor() {
  return (
    <section className="about">
      <img alt="About Me" className="about__image"></img>

      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__desription">
          Hello! My name is Svetlana. I'm a self-driven software engineer based in San Francisco, with a keen focus on creative problem-solving.
        </p>
        <p className="about__desription">
          My expertise lies in developing dynamic solutions using JavaScript, React, Vue.js, Node, and Express. Passionate about technology, I
          continually strive to innovate and excel in my field
        </p>
      </div>
    </section>
  );
}
