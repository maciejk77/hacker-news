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

  useEffect(() => {
    fetchStory(storyId).then(story => story && setStory(story));
  }, []);

  const toggleCard = e => {
    expandCard(!isExpanded);
  };

  const prevComment = () => {
    if (!story.kids.length) {
      return null;
    }
    commentIndex === 0
      ? setCommentIndex(story.kids.length - 1)
      : setCommentIndex(commentIndex - 1);
  };

  const nextComment = () => {
    if (!story.kids.length) {
      return null;
    }
    commentIndex === story.kids.length - 1
      ? setCommentIndex(0)
      : setCommentIndex(commentIndex + 1);
  };

  return (
    <div className={cn('card', { 'card-expanded': isExpanded })} key={story.id}>
      <div onClick={toggleCard}>
        <div className="card__header">
          <div>
            <FaHandPointUp />
            &nbsp;{story.score}
          </div>
          <div>
            {isExpanded ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
          </div>
        </div>
        <div className="card__body">
          <div className="card-item title">{story.title}</div>
          <div className="card-item by">By {story.by}</div>
        </div>
        <div className="card-item comments">
          {story.kids ? (
            <Comments
              commentIds={story.kids}
              isExpanded={isExpanded}
              commentIndex={commentIndex}
            />
          ) : (
            <div>No comments yet...</div>
          )}
        </div>
      </div>
      {story.kids && (
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
