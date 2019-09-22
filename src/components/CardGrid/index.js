import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './styles.scss';
const baseUrl = 'https://hacker-news.firebaseio.com/v0';

const CardGrid = () => {
  const [stories, collectStories] = useState([]);

  const fetchStories = async () => {
    const response = await fetch(`${baseUrl}/topstories.json`);
    const storyIds = await response.json();

    return await Promise.all(
      storyIds.map(async id => {
        const response = await fetch(`${baseUrl}/item/${id}.json`);
        const storyData = await response.json();
        collectStories(collection => [...collection, storyData]);
      })
    );
  };

  useEffect(() => {
    fetchStories();
  }, []);

  // Top 500 'stories' include 1 job which (optionally here) may be filtered out to 'storiesOnly'
  const storiesOnly = stories.filter(st => st.type !== 'job');

  return (
    <div className="card-grid">
      {storiesOnly.map(story => {
        return <Card key={story.id} story={story} />;
      })}
    </div>
  );
};

export default CardGrid;
