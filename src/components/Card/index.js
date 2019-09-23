import React, { useState } from 'react';
import Comments from '../Comments';
import cn from 'classnames';
import './styles.scss';

const Card = ({ id, score, title, by, kids }) => {
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
      <div className="card__item">
        <Comments commentIds={kids} />
      </div>
    </div>
  );
};

export default Card;
