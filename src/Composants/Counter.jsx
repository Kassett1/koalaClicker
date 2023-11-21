import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function Counter({ money }) {
  return (
    <div
      className="counter"
    >
      <p>{money}</p>
      <img src="/images/teteKoala.png" alt="money" className="moneyImg" />
    </div>
  );
}

Counter.propTypes = {
  money: PropTypes.number.isRequired,
};

export default Counter;
