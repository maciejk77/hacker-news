import React, { useState, useEffect } from 'react';
import parser from 'html-react-parser';
// import Loader from 'react-loader-spinner';
import { FaComments } from 'react-icons/fa';
import './styles.scss';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';

const Comments = ({ commentIds, isExpanded }) => {
  // const [comments, collectComments] = useState([]);
  const [firstComment, setComment] = useState();

  if (!commentIds) {
    return null;
  }

  const fetchComment = async () => {
    const response = await fetch(`${baseUrl}/item/${commentIds[0]}.json`);
    const comment = await response.json();
    setComment(comment.text);
  };

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <div className="comments">
      {firstComment ? (
        <div>
          <FaComments />
          <blockquote>
            {!isExpanded
              ? parser(`${firstComment.substring(0, 65)}...`)
              : parser(firstComment)}
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
