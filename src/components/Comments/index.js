import React, { useState, useEffect } from 'react';
import { fetchComment } from '../../services';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
//import Loader from 'react-loader-spinner';
import { FaComments } from 'react-icons/fa';
import './styles.scss';

const Comments = ({ commentIds, isExpanded, commentIndex }) => {
  const [comment, setComment] = useState();
  const [author, setAuthor] = useState();

  const commentToDisplay =
    !isExpanded && comment ? `${comment.substring(0, 65)}...` : comment;

  useEffect(() => {
    fetchComment(commentIds[commentIndex]).then(comment => {
      setComment(comment.text);
      setAuthor(comment.by);
    });
  }, [commentIndex]);

  return (
    <div className="comments">
      {comment ? (
        <div className="comment">
          <div className="comment-wrapper">
            <FaComments className="comment__icon" />
            <span>&nbsp; {author}</span>
          </div>

          <blockquote className="comment__text">
            {parser(commentToDisplay)}
          </blockquote>
        </div>
      ) : (
        <div>Loading...</div>
        // <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
      )}
    </div>
  );
};

Comments.propTypes = {
  commentIds: PropTypes.array,
  isExpanded: PropTypes.bool,
  commentIndex: PropTypes.number
};

export default Comments;
