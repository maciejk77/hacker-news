import React from 'react';
import './styles.scss';

const Card = ({ story }) => (
  <div className="card">
    <div>Title: {story.title}</div>
    <div>Score: {story.score}</div>
    <div>Author: {story.author}</div>
    <div>Text: {story.text}</div>
  </div>
);

export default Card;
