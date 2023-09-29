import React from 'react';
import PropTypes from 'prop-types';

function IncrClique({ count, onBuyUpgrade, prix }) {
  return (
    <button
      type="button"
      onClick={onBuyUpgrade}
      disabled={count < prix}
      style={{ opacity: count < prix ? 0.5 : 1 }}
    >
      Koala Click
      <br />
      +1 Koala per click
      <br />
      Coût:
      {prix}
    </button>
  );
}

IncrClique.propTypes = {
  count: PropTypes.number.isRequired,
  onBuyUpgrade: PropTypes.func.isRequired,
  prix: PropTypes.number.isRequired,
};

export default IncrClique;
