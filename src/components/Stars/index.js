import React from 'react';

import { Star } from '../Star/';

import './index.scss';

export const Stars = ({ count }) => {
  const countInt = Number.parseInt(count);
  if (Number.isNaN(countInt) || countInt < 1 || countInt > 5) {
    return null;
  }
  return (
    <ul className='card-body-stars'>
      {count > 1 ? (
        [...Array(count)].map((_, i) => (
          <li key={i}>
            <Star />
          </li>
        ))
      ) : (
        <li>
          <Star />
        </li>
      )}
    </ul>
  );
};
