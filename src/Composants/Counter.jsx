import React from 'react';
import PropTypes from 'prop-types';

function Counter({
  money, hueRotation, saturation, brightness, format,
}) {
  return (
    <div
      className="counter"
    >
      <p className="counter__money">{format(money)}</p>
      <img
        src="images/teteKoala.png"
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
  format: PropTypes.func.isRequired,
};

export default Counter;
