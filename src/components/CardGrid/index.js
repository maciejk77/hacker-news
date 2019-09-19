import React, { useState } from 'react';
import { stories } from '../../data/data.json';
import './styles.scss';

const CardGrid = () => {
  let [isExtendedMap, extendCard] = useState(
    Array(stories.map(story => story.id).length).fill(false)
  );

  const toggleCard = e => {
    const cards = isExtendedMap.slice();
    const val = e.target.getAttribute('value');
    cards[val] = !cards[val];
    extendCard(cards);
  };

  // refactor to styled component ExpandableCard?
  const isExtendedLogic = id =>
    isExtendedMap[id]
      ? { gridRowEnd: 'span 2', gridColumnEnd: 'span 2' }
      : null;

  return (
    <div className="card-grid">
      {stories.map(({ id, title, text }) => {
        return (
          <div
            className="card-grid__card"
            key={id}
            onClick={toggleCard}
            style={isExtendedLogic(id)}
            value={id}
          >
            <div>Title {title}</div>
            <div>Content {text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
