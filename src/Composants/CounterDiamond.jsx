import React from 'react';
import PropTypes from 'prop-types';

function CounterDiamond({ diamond }) {
  return (
    <div
      className="counter-diamond"
    >
      <p className="counter-diamond__diamond">{diamond}</p>
      <img src="/images/diamond.png" alt="diamonds" className="counter-diamond__img" draggable="false" />
    </div>
  );
}

CounterDiamond.propTypes = {
  diamond: PropTypes.number.isRequired,
};

export default CounterDiamond;
