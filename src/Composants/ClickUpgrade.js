import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function ClickUpgrade({
  score, onBuy, upgrade, totalCost,
}) {
  return (
    <button
      className="upgrades clickButton"
      type="button"
      onClick={onBuy}
      disabled={score < totalCost}
      style={{ backgroundColor: score < totalCost ? '#5EB9FA' : '#75DE5B' }}
    >
      Click
      <br />
      {totalCost}
      <br />
      Amount:
      <br />
      {upgrade.value}
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
  // multiplier: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired,
};

export default ClickUpgrade;
