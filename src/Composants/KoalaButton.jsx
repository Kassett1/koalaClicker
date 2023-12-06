import React from 'react';
import PropTypes from 'prop-types';

function KoalaButton({
  money,
  setMoney,
  diamond,
  setDiamond,
  click,
  hueRotation,
  saturation,
  brightness,
  diamondUpgrade,
}) {
  // Génère un nombre aléatoire dans un intervalle donné
  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const generateDiamond = () => {
    const percent = Math.random() * 100;

    // Chaque clique a entre MIN et MAX % de chance de générer un diamant
    const dropChance = randomInRange(0.5, 2);

    if (percent <= dropChance) {
      // Nombre de diamant généré aléatoirement entre MIN et MAX
      return Math.floor(randomInRange(1 * diamondUpgrade, 5 * diamondUpgrade));
    }
    return 0;
  };

  // Fonction pour incrémenter la money et les diamants
  const incrementMoney = () => {
    setMoney(money + click);
    // spawn();  désactivé car pas utile mais laissé car intéressant
    setDiamond(diamond + generateDiamond());
  };

  return (
    <div className="koala-button">
      <img
        src="/images/koala.png"
        alt="Clickable Koala"
        onClick={incrementMoney}
        className="koala-button__img"
        draggable="false"
        style={{ filter: `hue-rotate(${hueRotation}deg) saturate(${saturation}) brightness(${brightness})` }}
      />
    </div>
  );
}

KoalaButton.propTypes = {
  money: PropTypes.number.isRequired,
  setMoney: PropTypes.func.isRequired,
  diamond: PropTypes.number.isRequired,
  setDiamond: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  spawn: PropTypes.func.isRequired,
  click: PropTypes.number.isRequired,
  hueRotation: PropTypes.number.isRequired,
  saturation: PropTypes.number.isRequired,
  brightness: PropTypes.number.isRequired,
  diamondUpgrade: PropTypes.number.isRequired,
};

export default KoalaButton;
