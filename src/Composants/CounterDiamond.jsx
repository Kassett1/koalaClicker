import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function CounterDiamond({ diamond }) {
  return (
    <div
      className="counter"
    >
      <p>{diamond}</p>
      <img src="/images/diamond.png" alt="money" className="diamondImg" />
    </div>
  );
}

CounterDiamond.propTypes = {
  diamond: PropTypes.number.isRequired,
};

export default CounterDiamond;