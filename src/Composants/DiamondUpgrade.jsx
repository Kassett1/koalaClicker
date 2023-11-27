import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function DiamondUpgrade({
  money, setMoney, multiplier, update, rebirth,
}) {
  const baseValue = 0;
  const basePrice = 50;

  // État pour stocker la valeur actuelle, le prix et le nombre d'améliorations achetées.
  const [diamondUpgrade, setDiamondUpgrade] = useState({
    value: baseValue,
    price: basePrice,
    count: 0,
  });

  const priceAugment = 1.03;

  // Calcul du coût total des améliorations en fonction du multiplicateur.
  const calculateTotalCost = () => {
    let total = 0;
    let newPrice = diamondUpgrade.price;

    // Ajout du coût de chaque amélioration.
    for (let i = 0; i < multiplier; i += 1) {
      total += newPrice;
      newPrice = Math.ceil(newPrice * priceAugment);
    }

    return total;
  };

  // MAJ de la valeur de l'amélioration et du prix après l'achat.
  const updateDiamondValue = (addedValue, newPrice) => {
    setDiamondUpgrade((prev) => ({
      ...prev,
      value: prev.value + addedValue,
      price: newPrice,
      count: prev.count + addedValue,
    }));
  };

  // Achat d'améliorations lorsque le bouton est cliqué.
  const buyDiamondUpgrade = () => {
    const totalCost = calculateTotalCost();

    // money est suffisant ou non pour acheter les améliorations.
    if (money >= totalCost) {
      setMoney(money - totalCost);
      const newPrice = Math.ceil(diamondUpgrade.price * (priceAugment ** multiplier));
      // MAJ de la valeur, du prix de l'amélioration et du compteur.
      updateDiamondValue(multiplier, newPrice);
    }
  };

  // MAJ la valeur de l'amélioration dans App.
  useEffect(() => {
    update(diamondUpgrade.value);
  }, [diamondUpgrade.value]);

  useEffect(() => {
    setDiamondUpgrade((prev) => ({
      ...prev,
      value: baseValue,
      price: basePrice,
      count: 0,
    }));
  }, [rebirth]);

  return (
    <button
      className={money < calculateTotalCost() ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={buyDiamondUpgrade}
      disabled={money < calculateTotalCost()}
    >
      <p className="upgrade__name">Diamond</p>
      <p className={money < calculateTotalCost() ? 'upgrade__cost upgrade--cant-buy__cost' : 'upgrade__cost upgrade--buy__cost'}>
        {`$${calculateTotalCost()}`}
      </p>

    </button>
  );
}

DiamondUpgrade.propTypes = {
  money: PropTypes.number.isRequired,
  setMoney: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  rebirth: PropTypes.number.isRequired,
};

export default DiamondUpgrade;
