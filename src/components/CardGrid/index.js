import React, { useState, useEffect } from 'react';
import './styles.scss';
const baseUrl = 'https://hacker-news.firebaseio.com/v0';

const CardGrid = () => {
  const [stories, collectStories] = useState([]);
  const [isExpandedMap, expandCard] = useState(
    Array(stories.length).fill(false)
  );

  useEffect(() => {
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
    fetchStories();
  }, []);

  const toggleCard = e => {
    const cards = isExpandedMap.slice();
    const val = e.target.getAttribute('value');
    cards[val] = !cards[val];
    expandCard(cards);
  };

  // refactor to styled component ExpandableCard?
  const isExpandedLogic = id =>
    isExpandedMap[id]
      ? {
          gridRowEnd: 'span 2',
          gridColumnEnd: 'span 2',
          backgroundColor: '#ecbf04'
        }
      : null;

  // Top 500 'stories' include 1 job which (optionally here) may be filtered out to 'storiesOnly'
  const storiesOnly = stories.filter(st => st.type !== 'job');

  return (
    <div className="card-grid">
      {storiesOnly.map(({ id, score, title, by }) => {
        return (
          <div
            className="card-grid__card"
            key={id}
            onClick={toggleCard}
            style={isExpandedLogic(id)}
            value={id}
          >
            <div className="card-wrapper">
              <div className="card-wrapper__item">[^{score}]</div>
              <div className="card-wrapper__item">{title}</div>
              <div className="card-wrapper__item">By {by}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
