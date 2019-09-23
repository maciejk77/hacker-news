import React, { useState } from 'react';
import Comments from '../Comments';
import cn from 'classnames';
import {
  FaHandPointUp,
  FaChevronCircleUp,
  FaChevronCircleDown
} from 'react-icons/fa';
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
      <div className="card__header">
        <div>
          <FaHandPointUp />
          &nbsp;{score}
        </div>
        <div>
          {isExpanded ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
        </div>
      </div>
      <div className="card__body">
        <div className="card__item title">{title}</div>
        <div className="card__item by">By {by}</div>
        <div className="card__item comments">
          <Comments commentIds={kids} {...isExpanded} />
        </div>
      </div>
    </div>
  );
};

export default Card;
