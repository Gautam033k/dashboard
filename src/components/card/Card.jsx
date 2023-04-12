import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.color.backGround,
        marginLeft: '10%',
      }}
    >
      <div className="values">
        <div className="icon">{<props.icon size="2rem" />}</div>
        <div>
          <p>{props.title}</p>
          <strong>${props.value}</strong>
        </div>
      </div>
    </div>
  );
};

export default Card;
