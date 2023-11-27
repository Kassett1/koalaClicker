import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ColorChange({
  diamond, setDiamond, setHueRotation, setSaturation, setBrightness,
}) {
  const [colorPrice] = useState(10);

  function getRandomValue(min, max, step) {
    const range = (max - min) / step;
    const randomStep = Math.floor(Math.random() * range);
    return min + step * randomStep;
  }

  const changeColor = () => {
    setDiamond(diamond - colorPrice);

    const newHueRotation = getRandomValue(0, 360, 60); // Multiples de 60 pour hue-rotate
    const newSaturation = getRandomValue(1, 3, 0.5); // Entre 1 et 3 pour saturation
    const newBrightness = getRandomValue(0.8, 1.5, 0.1); // Entre 0.8 et 1.5 pour brightness

    setHueRotation(newHueRotation);
    setSaturation(newSaturation);
    setBrightness(newBrightness);
  };

  return (
    <button
      className={diamond < colorPrice ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={changeColor}
      disabled={diamond < colorPrice}
    >
      <p className="upgrade__name">Change Color</p>
      <p className={diamond < colorPrice ? 'upgrade__cost upgrade--cant-buy__cost' : 'upgrade__cost upgrade--buy__cost'}>
        <i className="fa-regular fa-gem" />
        {' '}
        {colorPrice}
      </p>
    </button>
  );
}

ColorChange.propTypes = {
  diamond: PropTypes.number.isRequired,
  setDiamond: PropTypes.func.isRequired,
  setHueRotation: PropTypes.func.isRequired,
  setSaturation: PropTypes.func.isRequired,
  setBrightness: PropTypes.func.isRequired,
};

export default ColorChange;
