import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PowerClick({
  diamond, setDiamond, clickValue, setClickValue,
}) {
  const [powerPrice] = useState(10);
  const [isWorking, setIsWorking] = useState(false);

  const buyPower = () => {
    setDiamond(diamond - powerPrice);
    const currentClickValue = clickValue;
    setClickValue(clickValue * 5);
    setIsWorking(true);

    setTimeout(() => {
      setIsWorking(false);
      setClickValue(currentClickValue);
    }, 20000);
  };

  return (
    <button
      className={diamond < powerPrice || isWorking ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={buyPower}
      disabled={diamond < powerPrice || isWorking}
    >
      <p className="upgrade__name">Power Click</p>
      <p className={diamond < powerPrice || isWorking ? 'upgrade__cost upgrade--cant-buy__cost' : 'upgrade__cost upgrade--buy__cost'}>
        <i className="fa-regular fa-gem" />
        {' '}
        {powerPrice}
      </p>
    </button>
  );
}

PowerClick.propTypes = {
  diamond: PropTypes.number.isRequired,
  setDiamond: PropTypes.func.isRequired,
  clickValue: PropTypes.number.isRequired,
  setClickValue: PropTypes.func.isRequired,
};

export default PowerClick;
