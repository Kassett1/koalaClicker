import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function AutoClick({ money, setMoney, multiplier }) {
  // État pour stocker la valeur actuelle, le prix et le nombre d'améliorations achetées.
  const [autoClick, setAutoClick] = useState({
    value: 0,
    price: 1000,
    count: 0,
  });

  const priceAugment = 1.05;
  const autoClickPower = 10;

  // Référence pour maintenir la valeur actuelle de l'auto-click pour l'effet.
  const autoClickValueRef = useRef(autoClick.value);

  // Fonction pour appliquer l'effet de l'auto-click.
  const applyAutoClick = () => {
    setMoney((prevMoney) => prevMoney + autoClickValueRef.current);
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

    // Vérifie si la money est suffisante pour l'achat.
    if (money >= totalCost) {
      setMoney(money - totalCost);
      const newPrice = Math.ceil(autoClick.price * (priceAugment ** multiplier));
      const newValue = autoClick.value + (autoClickPower * multiplier);
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
      className={money < calculateTotalCost() ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={buyAutoClickUpgrade}
      disabled={money < calculateTotalCost()}
    >
      <p className="upgrade__name upgrade--buy__nale upgrade--cant-buy__name">Click</p>
      <p className="upgrade__cost upgrade--buy__cost upgrade--cant-buy__cost">{`$${calculateTotalCost()}`}</p>
    </button>
  );
}

AutoClick.propTypes = {
  money: PropTypes.number.isRequired,
  setMoney: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
};

export default AutoClick;
