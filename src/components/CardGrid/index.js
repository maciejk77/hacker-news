import React, { useState, useEffect } from 'react';
import { fetchStoryIds } from '../../services';
//import Pagination from '../Pagination';
import Card from '../Card';
import './styles.scss';

const CardGrid = () => {
  const [storyIds, setStoryIds] = useState([]);
  // pagination, pages, storyIds per page
  // const [currentPage, setCurrentPage] = useState(1);
  // const [storiesPerPage] = useState(25);

  useEffect(() => {
    fetchStoryIds().then(ids => ids && setStoryIds(ids));
  }, []);

  // ========== ALL COMMENTED WHEN ENABLED WILL PROVIDE PAGINATION FEATURE ================
  // Top 500 'storyIds' include 1 job which (optionally here) may be filtered out to 'storiesOnly'
  //const storiesOnly = storyIds.filter(st => st.type !== 'job');

  // Get current storyIds
  // const indexOfLastStory = currentPage * storiesPerPage;
  // const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  // const currentStories = storiesOnly.slice(indexOfFirstStory, indexOfLastStory);

  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="card-grid">
        {storyIds.map(storyId => {
          return <Card key={storyId} storyId={storyId} />;
        })}
      </div>
      {/* <Pagination
        storiesPerPage={storiesPerPage}
        totalStories={storiesOnly.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default CardGrid;
