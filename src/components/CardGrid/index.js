import React from 'react';
import { stories } from '../../data/data.json';
import Card from '../Card';
import './styles.scss';

const CardGrid = () => {
  return stories.map(story => (
    <div className="card-grid" key={story.id}>
      <Card story={story} />
    </div>
  ));
};

export default CardGrid;
