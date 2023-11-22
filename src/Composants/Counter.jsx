import React from 'react';
import PropTypes from 'prop-types';

function Counter({ money }) {
  return (
    <div
      className="counter"
    >
      <p className="counter__money">{money}</p>
      <img src="/images/teteKoala.png" alt="money" className="counter__img" />
    </div>
  );
}

Counter.propTypes = {
  money: PropTypes.number.isRequired,
};

export default Counter;
