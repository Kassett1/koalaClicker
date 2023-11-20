import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function Multiplier({ setMultiplier, multiplier }) {
  const multipliers = [1, 10, 50, 100];

  return (
    <div>
      {multipliers.map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setMultiplier(m)}
          style={{ backgroundColor: m === multiplier ? 'green' : 'gray' }}
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
