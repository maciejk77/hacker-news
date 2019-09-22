import React, { useState } from 'react';
import './styles.scss';

const Card = ({ story }) => {
  const [isExpanded, expandCard] = useState(false);
  const { id, score, title, by } = story;

  const toggleCard = () => expandCard(!isExpanded);
  // quick fix, to be refactored to styled-component?
  const applyExpandStyle = () =>
    isExpanded
      ? {
          gridRowEnd: 'span 2',
          gridColumnEnd: 'span 2',
          backgroundColor: '#ecbf04'
        }
      : null;

  return (
    <div
      className="card"
      key={id}
      onClick={toggleCard}
      style={applyExpandStyle()}
      value={id}
    >
      <div className="card__item">[^{score}]</div>
      <div className="card__item">{title}</div>
      <div className="card__item">By {by}</div>
    </div>
  );
};

export default Card;
