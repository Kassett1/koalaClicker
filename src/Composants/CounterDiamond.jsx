import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function CounterDiamond({ diamond }) {
  return (
    <div
      className="Counter-diamond"
    >
      <p className="Counter-diamond__diamond">{diamond}</p>
      <img src="/images/diamond.png" alt="diamonds" className="Counter-diamond__img" />
    </div>
  );
}

CounterDiamond.propTypes = {
  diamond: PropTypes.number.isRequired,
};

export default CounterDiamond;
