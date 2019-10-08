import React, { useState, useEffect, memo } from 'react';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { fetchStoryIds } from '../../services';

import Card from '../Card';
import './styles.scss';

const CardGrid = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    fetchStoryIds().then(ids => ids && setStoryIds(ids));
    console.log('count ==> ', count);
  }, [count]);

  return (
    <div className="card-grid" data-testid="stories-container">
      {/* {storyIds.slice(0, count).map(storyId => (      // fix the scrolling first to replace below with this  */}
      {storyIds.map(storyId => (
        <Card key={storyId} storyId={storyId} />
      ))}
    </div>
  );
};

export default CardGrid;
