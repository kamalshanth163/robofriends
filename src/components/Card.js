
import React from 'react';
import './Card.css';
const Card = (props) => {

  const { id, name, email } = props;

  return (
    <div id='card' className='tc bg-light-white dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;