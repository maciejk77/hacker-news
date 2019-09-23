import React, { useState, useEffect } from 'react';
const baseUrl = 'https://hacker-news.firebaseio.com/v0';

const Comments = ({ commentIds }) => {
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
    <div>
      <div>-----</div>
      <div>{firstComment ? firstComment.substring(0, 45) : ''}</div>
    </div>
  );
};

export default Comments;
