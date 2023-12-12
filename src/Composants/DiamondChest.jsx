import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function DiamondChest({ diamond, setDiamond }) {
  const timerSeconds = 3600; // Durée du cool down en secondes
  const timerMs = timerSeconds * 1000; // Durée du cool down en millisecondes

  const [isClickable, setIsClickable] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timerSeconds); // Durée initiale de 1 heure

  // Fonction de formatage du temps
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const lastClickedTime = localStorage.getItem('lastClickedTime');
    if (lastClickedTime) {
      const timePassed = Date.now() - new Date(lastClickedTime).getTime();
      if (timePassed >= timerMs) {
        setIsClickable(true);
      } else {
        setTimeLeft(timerSeconds - Math.floor(timePassed / 1000));
        setIsClickable(false);
      }
    } else {
      setIsClickable(true);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (!isClickable && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isClickable]);

  const handleClick = () => {
    if (isClickable) {
      setDiamond(diamond + 500);
      setIsClickable(false);
      setTimeLeft(timerSeconds);
      localStorage.setItem('lastClickedTime', new Date().toISOString());
    }
  };

  return (
    <div className="diamond-chest">
      <img
        src="images/chest.png"
        alt="chest"
        onClick={handleClick}
        className={isClickable ? 'diamond-chest__img' : 'diamond-chest__img--disable'}
        draggable="false"
      />
      <p className={isClickable ? 'diamond-chest__timer diamond-chest__timer--hidden' : 'diamond-chest__timer'}>{formatTime(timeLeft)}</p>
    </div>
  );
}

DiamondChest.propTypes = {
  diamond: PropTypes.number.isRequired,
  setDiamond: PropTypes.func.isRequired,
};

export default DiamondChest;
