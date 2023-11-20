import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function ClickUpgrade({
  score, setScore, multiplier, update,
}) {
  // État pour stocker la valeur actuelle, le prix et le nombre d'améliorations achetées.
  const [clickUpgrade, setClickUpgrade] = useState({
    value: 1000000,
    price: 50,
    count: 0,
  });

  // Calcul du coût total des améliorations en fonction du multiplicateur.
  const calculateTotalCost = () => {
    let total = 0;
    let newPrice = clickUpgrade.price;

    // Ajout du coût de chaque amélioration (+4% à chaque fois).
    for (let i = 0; i < multiplier; i += 1) {
      total += newPrice;
      newPrice = Math.ceil(newPrice * 1.04);
    }

    return total;
  };

  // MAJ de la valeur de l'amélioration et du prix après l'achat.
  const updateClickValue = (addedValue, newPrice) => {
    setClickUpgrade((prev) => ({
      ...prev,
      value: prev.value + addedValue,
      price: newPrice,
      count: prev.count + addedValue,
    }));

    // Refléter les changements dans le composant App.
    update(clickUpgrade.value + addedValue);
  };

  // Achat d'améliorations lorsque le bouton est cliqué.
  const buyClickUpgrade = () => {
    const totalCost = calculateTotalCost();

    // Score est suffisant ou non pour acheter les améliorations.
    if (score >= totalCost) {
      setScore(score - totalCost); // Déduit le coût du score.
      const newPrice = Math.ceil(clickUpgrade.price * (1.04 ** multiplier));
      // MAJ de la valeur, du prix de l'amélioration et du compteur.
      updateClickValue(multiplier, newPrice);
    }
  };

  // MAJ la valeur de l'amélioration dans App.
  useEffect(() => {
    update(clickUpgrade.value);
  }, [clickUpgrade.value]);

  return (
    <button
      className="upgrades clickButton"
      type="button"
      onClick={buyClickUpgrade}
      disabled={score < calculateTotalCost()} // Désactive le bouton si le score est insuffisant.
      style={{ backgroundColor: score < calculateTotalCost() ? '#5EB9FA' : '#75DE5B' }} // Change la couleur du bouton en fonction du score.
    >
      Cost:
      <br />
      {calculateTotalCost()}
      <br />
      Amount:
      <br />
      {clickUpgrade.count}
    </button>
  );
}

ClickUpgrade.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
};

export default ClickUpgrade;
