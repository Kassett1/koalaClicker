import React from 'react';
import PropTypes from 'prop-types';

function Counter({
  money, hueRotation, saturation, brightness,
}) {
  return (
    <div
      className="counter"
    >
      <p className="counter__money">{money}</p>
      <img
        src="/images/teteKoala.png"
        alt="money"
        className="counter__img"
        draggable="false"
        style={{ filter: `hue-rotate(${hueRotation}deg) saturate(${saturation}) brightness(${brightness})` }}
      />
    </div>
  );
}

Counter.propTypes = {
  money: PropTypes.number.isRequired,
  hueRotation: PropTypes.number.isRequired,
  saturation: PropTypes.number.isRequired,
  brightness: PropTypes.number.isRequired,
};

export default Counter;
