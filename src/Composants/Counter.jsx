import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function Counter({ score }) {
  return (
    <div
      className="counter"
    >
      <p>{score}</p>
      <img src="/images/teteKoala.png" alt="money" className="moneyImg" />
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Counter;
