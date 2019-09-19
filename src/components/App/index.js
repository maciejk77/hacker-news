import React, { useState } from 'react';
import styled from 'styled-components';
import CardGrid from '../CardGrid';
import './styles.scss';

// const App = () => <CardGrid />;
const App = () => {
  let [isExtended, extendCard] = useState(Array(15).fill(false));
  let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const toggleCard = e => {
    const cards = isExtended.slice();
    const val = e.target.getAttribute('value');
    cards[val] = !cards[val];
    extendCard(cards);
  };

  return (
    <div className="wrapper">
      {card.map(c => {
        return (
          <div
            style={
              isExtended[c]
                ? { gridRowEnd: 'span 2', gridColumnEnd: 'span 2' }
                : null
            }
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
