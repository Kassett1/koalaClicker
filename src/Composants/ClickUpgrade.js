import React from 'react';
import PropTypes from 'prop-types';

function ClickUpgrade({
  score, onBuy, upgrade, totalCost,
}) {
  return (
    <button
      type="button"
      onClick={onBuy}
      disabled={score < totalCost}
      style={{ backgroundColor: score < totalCost ? 'gray' : 'green' }}
    >
      Click Upgrade
      <br />
      +
      {upgrade.value}
      {' '}
      Koala per click
      <br />
      Coût:
      {' '}
      {totalCost}
      <br />
      Améliorations achetées:
      {' '}
      {upgrade.count}
    </button>
  );
}

ClickUpgrade.propTypes = {
  score: PropTypes.number.isRequired,
  onBuy: PropTypes.func.isRequired,
  upgrade: PropTypes.shape({
    value: PropTypes.number,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  multiplier: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired,
};

export default ClickUpgrade;
