import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ListingItemModel } from '../../../models/ListingItemModel';

import { formatCurrency } from '../../../utils/formatCurrency';

export const ListingItem = ({ item }) => {
  if (!item?.MainImage?.url_570xN) return null;

  const leftClass = item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high';

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{item.title}</p>
        <p className='item-price'>{`${formatCurrency(item.currency_code)} ${item.price}`}</p>
        <p className={classNames('item-quantity', `level-${leftClass}`)}>{item.quantity} left</p>
      </div>
    </div>
  );
};

ListingItem.defaultProps = {
  item: {},
};

// почему в консоли варнинг? что не так?
// все это весело но проверка только на наличие полей, а как проверить что поле в объекте тоже объект например MainImage
// пора разобраться с ts

ListingItem.propTypes = {
  item: PropTypes.instanceOf(ListingItemModel).isRequired,
};
