import React, { useState } from 'react';
import styled from 'styled-components';
import CardGrid from '../CardGrid';
import './styles.scss';

// const App = () => <CardGrid />;
const App = () => {
  const [isCardExtended, extendCard] = useState(false);
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const toggleCard = e => {
    extendCard(!isCardExtended);
  };

  return (
    <div className="wrapper">
      {card.map(c => {
        return (
          <div
            style={isCardExtended ? { width: '200px', height: '200px' } : null}
            key={c}
            onClick={toggleCard}
            value={c}
          >
            <div>Title {c}</div>
            <div>Content {c}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
