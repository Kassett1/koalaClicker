import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function SpeedAutoClick({
  diamond, setDiamond, setIntervalTime, intervalTime, format,
}) {
  const [speedPrice] = useState(1000);
  const [isWorking, setIsWorking] = useState(false);
  const [prevIntervalTime, setPrevIntervalTime] = useState(0);

  const buySpeed = () => {
    setDiamond(diamond - speedPrice);
    setIsWorking(true);
  };

  useEffect(() => {
    let timer;
    if (isWorking) {
      setPrevIntervalTime(intervalTime);
      setIntervalTime(100);

      timer = setTimeout(() => {
        setIntervalTime(prevIntervalTime);
        setIsWorking(false);
      }, 20000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
        setIntervalTime(prevIntervalTime);
      }
    };
  }, [isWorking, setIntervalTime, intervalTime]);

  return (
    <button
      className={diamond < speedPrice || isWorking ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={buySpeed}
      disabled={diamond < speedPrice || isWorking}
    >
      <p className="upgrade__name">Auto Speed</p>
      <p className={diamond < speedPrice || isWorking ? 'upgrade__cost upgrade--cant-buy__cost' : 'upgrade__cost upgrade--buy__cost'}>
        <i className="fa-regular fa-gem" />
        {' '}
        {format(speedPrice)}
      </p>
    </button>
  );
}

SpeedAutoClick.propTypes = {
  diamond: PropTypes.number.isRequired,
  setDiamond: PropTypes.func.isRequired,
  setIntervalTime: PropTypes.func.isRequired,
  intervalTime: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired,
};

export default SpeedAutoClick;
