import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function SuperAuto({
  money, setMoney, multiplier, rebirth, intervalTime,
}) {
  const baseValue = 0;
  const basePrice = 1000;

  // État pour stocker la valeur actuelle, le prix et le nombre d'améliorations achetées.
  const [autoClick, setAutoClick] = useState({
    value: baseValue * 10,
    price: basePrice,
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

    // Ajout du coût de chaque auto-click.
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
      const newValue = autoClick.value + (autoClickPower * multiplier * 10);
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
    setAutoClick((prev) => ({
      ...prev,
      value: baseValue * 10,
      price: basePrice,
      count: 0,
    }));
    autoClickValueRef.current = baseValue;
  }, [rebirth]);

  useEffect(() => {
    const interval = setInterval(applyAutoClick, intervalTime);
    return () => clearInterval(interval);
  }, [intervalTime]);

  return (
    <button
      className={money < calculateTotalCost() ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={buyAutoClickUpgrade}
      disabled={money < calculateTotalCost()}
    >
      <p className="upgrade__name">Super Auto</p>
      <p className={money < calculateTotalCost() ? 'upgrade__cost upgrade--cant-buy__cost' : 'upgrade__cost upgrade--buy__cost'}>
        {`$${calculateTotalCost()}`}
      </p>
    </button>
  );
}

SuperAuto.propTypes = {
  money: PropTypes.number.isRequired,
  setMoney: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
  rebirth: PropTypes.number.isRequired,
  intervalTime: PropTypes.number.isRequired,
};

export default SuperAuto;
