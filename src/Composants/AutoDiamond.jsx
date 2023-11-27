import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function AutoDiamond({
  setDiamond, multiplier, rebirth, money, setMoney,
}) {
  const baseValue = 0;
  const basePrice = 1000;

  // État pour stocker la valeur actuelle, le prix et le nombre d'améliorations achetées.
  const [autoDiamond, setAutoDiamond] = useState({
    value: baseValue,
    price: basePrice,
    count: 0,
  });

  const priceAugment = 1.05;
  const autoDiamondPower = 1;

  const autoDiamondValueRef = useRef(autoDiamond.value);

  const applyAutoDiamond = () => {
    setDiamond((prevDiamond) => prevDiamond + autoDiamondValueRef.current);
  };

  const calculateTotalCost = () => {
    let total = 0;
    let newPrice = autoDiamond.price;

    for (let i = 0; i < multiplier; i += 1) {
      total += newPrice;
      newPrice = Math.ceil(newPrice * priceAugment);
    }

    return total;
  };

  const buyAutoDiamondUpgrade = () => {
    const totalCost = calculateTotalCost();

    if (money >= totalCost) {
      setMoney(money - totalCost);
      const newPrice = Math.ceil(autoDiamond.price * (priceAugment ** multiplier));
      const newValue = autoDiamond.value + (autoDiamondPower * multiplier);
      setAutoDiamond((prev) => ({
        ...prev,
        value: newValue,
        price: newPrice,
        count: prev.count + multiplier,
      }));
      autoDiamondValueRef.current = newValue; // Met à jour la référence avec la nouvelle valeur.
    }
  };

  useEffect(() => {
    const interval = setInterval(applyAutoDiamond, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAutoDiamond((prev) => ({
      ...prev,
      value: baseValue,
      price: basePrice,
      count: 0,
    }));
    autoDiamondValueRef.current = baseValue;
  }, [rebirth]);

  return (
    <button
      className={money < calculateTotalCost() ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={buyAutoDiamondUpgrade}
      disabled={money < calculateTotalCost()}
    >
      <p className="upgrade__name">Auto Diamond</p>
      <p className={money < calculateTotalCost() ? 'upgrade__cost upgrade--cant-buy__cost' : 'upgrade__cost upgrade--buy__cost'}>
        {`$${calculateTotalCost()}`}
      </p>
    </button>
  );
}

AutoDiamond.propTypes = {
  setDiamond: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
  rebirth: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
  setMoney: PropTypes.func.isRequired,
};

export default AutoDiamond;
