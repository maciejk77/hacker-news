import React, { useState } from 'react';
import cn from 'classnames';
import './styles.scss';

const Card = ({ id, score, title, by }) => {
  const [isExpanded, expandCard] = useState(false);
  const toggleCard = () => expandCard(!isExpanded);

  return (
    <div
      className={cn('card', { 'card-expanded': isExpanded })}
      key={id}
      onClick={toggleCard}
    >
      <div className="card__item">[^{score}]</div>
      <div className="card__item">{title}</div>
      <div className="card__item">By {by}</div>
      <div className="card__item">Comment goes here</div>
    </div>
  );
};

export default Card;
