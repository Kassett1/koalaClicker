import React from 'react';
import PropTypes from 'prop-types';

function Multiplicateur({ setMultiplier, multiplicateur }) {
  const multipliers = [1, 10, 50, 100];
  return (
    <div>
      {multipliers.map((m) => (
        <button key={m} type="button" onClick={() => setMultiplier(m)} style={{ backgroundColor: m === multiplicateur ? 'green' : 'gray' }}>
          {m}
          x
        </button>
      ))}
    </div>
  );
}

Multiplicateur.propTypes = {
  setMultiplier: PropTypes.func.isRequired,
  multiplicateur: PropTypes.number.isRequired,
};

export default Multiplicateur;
