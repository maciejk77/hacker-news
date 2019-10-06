import React, { useState, useEffect } from 'react';
import { fetchStory } from '../../services';
import PropTypes from 'prop-types';
import Comments from '../Comments';
import cn from 'classnames';
import {
  FaHandPointUp,
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import './styles.scss';

const Card = ({ storyId }) => {
  const [story, setStory] = useState({});
  const [isExpanded, expandCard] = useState(false);
  const [commentIndex, setCommentIndex] = useState(0);
  const { id, kids, score, title, by } = story;

  useEffect(() => {
    fetchStory(storyId).then(story => story && setStory(story));
  }, []);

  const toggleCard = e => {
    expandCard(!isExpanded);
  };

  const prevComment = () => {
    kids.length
      ? commentIndex === 0
        ? setCommentIndex(kids.length - 1)
        : setCommentIndex(commentIndex - 1)
      : null;
  };

  const nextComment = () => {
    kids.length
      ? commentIndex === kids.length - 1
        ? setCommentIndex(0)
        : setCommentIndex(commentIndex + 1)
      : null;
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
          <div className="card-item title">{title}</div>
          <div className="card-item by">By {by}</div>
        </div>
        <div className="card-item comments">
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
          <div onClick={prevComment} className="button-group__item">
            <FaChevronLeft />
            <span>&nbsp;prev</span>
          </div>
          <div onClick={nextComment} className="button-group__item">
            <span>next&nbsp;</span>
            <FaChevronRight />
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  title: PropTypes.string,
  by: PropTypes.string,
  kids: PropTypes.array
};

export default Card;
