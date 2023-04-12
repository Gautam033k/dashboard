import React from 'react';
import { cardData } from '../../Data/cardsData';
import './Cards.css';
import { Card } from '../card/Card';

const Cards = () => {
  return (
    <div className="cards">
      {cardData.map((card, index) => {
        return (
          <div className="parentContainer" key={index}>
            <Card
              title={card.title}
              value={card.value}
              icon={card.icon}
              color={card.color}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
