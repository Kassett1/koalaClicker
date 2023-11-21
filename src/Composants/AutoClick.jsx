import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function AutoClick({ score, setScore, multiplier }) {
  // État pour stocker la valeur actuelle, le prix et le nombre d'améliorations achetées.
  const [autoClick, setAutoClick] = useState({
    value: 0,
    price: 1000,
    count: 0,
  });

  const priceAugment = 2;

  // Référence pour maintenir la valeur actuelle de l'auto-click pour l'effet.
  const autoClickValueRef = useRef(autoClick.value);

  // Fonction pour appliquer l'effet de l'auto-click.
  const applyAutoClick = () => {
    setScore((prevScore) => prevScore + autoClickValueRef.current);
  };

  // Calcul du coût total pour l'achat des auto-clicks en fonction du multiplicateur.
  const calculateTotalCost = () => {
    let total = 0;
    let newPrice = autoClick.price;

    // Ajout du coût de chaque auto-click, augmentant de 5% à chaque itération.
    for (let i = 0; i < multiplier; i += 1) {
      total += newPrice;
      newPrice = Math.ceil(newPrice * priceAugment);
    }

    return total;
  };

  // Achat d'améliorations lorsque le bouton est cliqué.
  const buyAutoClickUpgrade = () => {
    const totalCost = calculateTotalCost();

    // Vérifie si le score est suffisant pour l'achat.
    if (score >= totalCost) {
      setScore(score - totalCost); // Déduit le coût de l'achat du score.
      const newPrice = Math.ceil(autoClick.price * (priceAugment ** multiplier));
      const newValue = autoClick.value + (10 * multiplier);
      setAutoClick((prev) => ({
        ...prev,
        value: newValue,
        price: newPrice,
        count: prev.count + multiplier,
      }));
      autoClickValueRef.current = newValue; // Met à jour la référence avec la nouvelle valeur.
    }
  };

  // Auto-click toutes les secondes.
  useEffect(() => {
    const interval = setInterval(applyAutoClick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      className="upgrades"
      type="button"
      onClick={buyAutoClickUpgrade}
      disabled={score < calculateTotalCost()} // Désactive le bouton si le score est insuffisant.
      style={{ backgroundColor: score < calculateTotalCost() ? '#5EB9FA' : '#75DE5B' }} // Change la couleur du bouton selon la disponibilité de l'achat.
    >
      Cost:
      <br />
      {calculateTotalCost()}
      <br />
      Amount:
      <br />
      {autoClick.count}
    </button>
  );
}

AutoClick.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
};

export default AutoClick;
