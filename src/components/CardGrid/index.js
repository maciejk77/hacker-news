import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import Card from '../Card';
import './styles.scss';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';

const CardGrid = () => {
  const [stories, collectStories] = useState([]);
  // pagination, pages, stories per page
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage] = useState(25);
  const [mount, setMount] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch(`${baseUrl}/topstories.json`);
      const storyIds = await response.json();

      storyIds.map(async id => {
        const response = await fetch(`${baseUrl}/item/${id}.json`);
        const storyData = await response.json();
        collectStories(collection => [...collection, storyData]);
      });
      setMount(false);
    };
    if (mount) {
      fetchStories();
    }
  }, [mount]);

  // Top 500 'stories' include 1 job which (optionally here) may be filtered out to 'storiesOnly'
  const storiesOnly = stories.filter(st => st.type !== 'job');

  // Get current stories
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = storiesOnly.slice(indexOfFirstStory, indexOfLastStory);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="card-grid">
        {currentStories.map(story => {
          return <Card key={story.id} {...story} />;
        })}
      </div>
      <Pagination
        storiesPerPage={storiesPerPage}
        totalStories={storiesOnly.length}
        paginate={paginate}
      />
    </div>
  );
};

export default CardGrid;
