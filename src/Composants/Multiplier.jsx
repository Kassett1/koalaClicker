import React from 'react';
import PropTypes from 'prop-types';

function Multiplier({ setMultiplier, multiplier }) {
  const multipliers = [1, 10, 50, 100];

  return (
    <div className="multiplier">
      {multipliers.map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setMultiplier(m)}
          className={m === multiplier ? 'multiplier__button multiplier__button--green' : 'multiplier__button multiplier__button--grey'}
        >
          {m}
          x
        </button>
      ))}
    </div>
  );
}

Multiplier.propTypes = {
  setMultiplier: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
};

export default Multiplier;
