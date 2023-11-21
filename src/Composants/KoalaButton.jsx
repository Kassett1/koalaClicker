import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function KoalaButton({
  money, setMoney, diamond, setDiamond, spawn, click,
}) {
  // Génère un nombre aléatoire dans un intervalle donné
  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const generateDiamond = () => {
    const percent = Math.random() * 100;

    // Chaque clique a entre MIN et MAX % de chance de générer un diamant
    const dropChance = randomInRange(0.5, 2);
    console.log(`percent ${percent}`);
    console.log(`drop chance ${dropChance}`);

    if (percent <= dropChance) {
      // Nombre de diamant généré aléatoirement entre MIN et MAX
      return Math.floor(randomInRange(1, 5));
    }
    return 0;
  };

  // Fonction pour incrémenter la money et les diamants
  const incrementMoney = () => {
    setMoney(money + click);
    spawn();
    setDiamond(diamond + generateDiamond());
  };

  return (
    <div>
      <div className="circle" />
      <img
        src="/images/koala.png"
        alt="Clickable Koala"
        onClick={incrementMoney}
        className="koala"
      />
    </div>
  );
}

KoalaButton.propTypes = {
  money: PropTypes.number.isRequired,
  setMoney: PropTypes.func.isRequired,
  diamond: PropTypes.number.isRequired,
  setDiamond: PropTypes.func.isRequired,
  spawn: PropTypes.func.isRequired,
  click: PropTypes.number.isRequired,
};

export default KoalaButton;
