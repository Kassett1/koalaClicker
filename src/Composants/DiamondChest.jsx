import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function DiamondChest({ diamond, setDiamond }) {
  const [isClickable, setIsClickable] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeLeftDisplay, setTimeLeftDisplay] = useState(null);

  const handleClick = () => {
    if (isClickable) {
      setDiamond(diamond + 50000);
      setIsClickable(false);
    }
  };

  useEffect(() => {
    let timer;
    if (!isClickable) {
      setTimeLeft(3599); // Initialisation de l'intervalle d'ouverture entre les coffres
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isClickable]);

  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft % 60);

    if (timeLeft === 0) {
      setIsClickable(true);
    }
    setTimeLeftDisplay(`${minutes}:${seconds}`);
  }, [timeLeft]);

  return (
    <div className="diamond-chest">
      <img
        src="/images/chest.png"
        alt="chest"
        onClick={handleClick}
        className={isClickable ? 'diamond-chest__img' : 'diamond-chest__img--disable'}
        draggable="false"
      />
      <p className={isClickable ? 'diamond-chest__timer diamond-chest__timer--hidden' : 'diamond-chest__timer'}>{timeLeftDisplay}</p>
    </div>
  );
}

DiamondChest.propTypes = {
  diamond: PropTypes.number.isRequired,
  setDiamond: PropTypes.func.isRequired,
};

export default DiamondChest;
