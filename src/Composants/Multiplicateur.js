import React from 'react';
import PropTypes from 'prop-types';

function Multiplicateur({ setMultiplier }) {
  const multipliers = [1, 10, 50, 100];
  return (
    <div>
      {multipliers.map((m) => (
        <button key={m} type="button" onClick={() => setMultiplier(m)}>
          {m}
          x
        </button>
      ))}
    </div>
  );
}

Multiplicateur.propTypes = {
  setMultiplier: PropTypes.func.isRequired,
};

export default Multiplicateur;
