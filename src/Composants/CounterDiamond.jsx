import React from 'react';
import PropTypes from 'prop-types';

function CounterDiamond({ diamond, format }) {
  return (
    <div
      className="counter-diamond"
    >
      <p className="counter-diamond__diamond">{format(diamond)}</p>
      <img src="/images/diamond.png" alt="diamonds" className="counter-diamond__img" draggable="false" />
    </div>
  );
}

CounterDiamond.propTypes = {
  diamond: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired,
};

export default CounterDiamond;
