import React from 'react';
import PropTypes from 'prop-types';

function AutoClick({
  score, onBuy, upgrade, multiplier,
}) {
  // Calcul du coût en fonction du multiplicateur
  const totalCost = upgrade.price * multiplier;

  return (
    <button
      type="button"
      onClick={onBuy}
      disabled={score < totalCost}
      style={{ backgroundColor: score < totalCost ? 'gray' : 'green' }}
    >
      AutoClick Upgrade
      <br />
      +1 Koala per second
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

AutoClick.propTypes = {
  score: PropTypes.number.isRequired,
  onBuy: PropTypes.func.isRequired,
  upgrade: PropTypes.shape({
    value: PropTypes.number,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  multiplier: PropTypes.number.isRequired,
};

export default AutoClick;
