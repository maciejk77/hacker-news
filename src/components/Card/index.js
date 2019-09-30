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
  const [commentIndex, setCommentIndex] = useState(0);

  const toggleCard = e => {
    expandCard(!isExpanded);
  };

  const prevComment = () => {
    console.log(commentIndex);
    if (!kids.length) {
      return null;
    }
    commentIndex === 0
      ? setCommentIndex(kids.length - 1)
      : setCommentIndex(commentIndex - 1);
  };

  const nextComment = () => {
    if (!kids.length) {
      return null;
    }
    commentIndex === kids.length - 1
      ? setCommentIndex(0)
      : setCommentIndex(commentIndex + 1);
  };

  return (
    <div className={cn('card', { 'card-expanded': isExpanded })} key={id}>
      <div onClick={toggleCard}>
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
        </div>
        <div className="card__item comments">
          {kids ? (
            <Comments
              commentIds={kids}
              isExpanded={isExpanded}
              commentIndex={commentIndex}
            />
          ) : (
            <div>No comments yet...</div>
          )}
        </div>
      </div>
      {kids && (
        <div className="button-group">
          <div className="button-group__button" onClick={prevComment}>
            &lt;&lt; prev
          </div>
          <div className="button-group__button" onClick={nextComment}>
            next &gt;&gt;
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
