import React, { useState } from 'react';
import cn from 'classnames';
import './styles.scss';

const Card = ({ story }) => {
  const [isExpanded, expandCard] = useState(false);
  const { id, score, title, by } = story;

  const toggleCard = () => expandCard(!isExpanded);

  return (
    <div
      className={cn('card', { 'card-expanded': isExpanded })}
      key={id}
      onClick={toggleCard}
      value={id}
    >
      <div className="card__item">[^{score}]</div>
      <div className="card__item">{title}</div>
      <div className="card__item">By {by}</div>
      <div className="card__item">Comment goes here</div>
    </div>
  );
};

export default Card;
