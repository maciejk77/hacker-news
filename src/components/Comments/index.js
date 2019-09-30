import React, { useState, useEffect } from 'react';
import parser from 'html-react-parser';
//import Loader from 'react-loader-spinner';
import { FaComments } from 'react-icons/fa';
import './styles.scss';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';

const Comments = ({ commentIds, isExpanded, commentIndex }) => {
  const [firstComment, setComment] = useState();
  const [author, setAuthor] = useState();

  const commentToDisplay =
    !isExpanded && firstComment
      ? `${firstComment.substring(0, 65)}...`
      : firstComment;

  const fetchComment = async () => {
    const response = await fetch(
      `${baseUrl}/item/${commentIds[commentIndex]}.json`
    );
    const comment = await response.json();
    setComment(comment.text);
    setAuthor(comment.by);
  };

  useEffect(() => {
    fetchComment();
  }, [commentIndex]);

  return (
    <div className="comments">
      {firstComment ? (
        <div className="comment">
          <div className="foo">
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

export default Comments;
