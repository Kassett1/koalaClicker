import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ClickUpgrade({
  money, setMoney, multiplier, update, rebirth, format,
}) {
  const baseValue = 1;
  const basePrice = 50;

  // État pour stocker la valeur actuelle, le prix et le nombre d'améliorations achetées.
  const [clickUpgrade, setClickUpgrade] = useState({
    value: baseValue * rebirth,
    price: basePrice,
    count: 0,
  });
  const priceAugment = 1.03;

  // Calcul du coût total des améliorations en fonction du multiplicateur.
  const calculateTotalCost = () => {
    let total = 0;
    let newPrice = clickUpgrade.price;

    // Ajout du coût de chaque amélioration.
    for (let i = 0; i < multiplier; i += 1) {
      total += newPrice;
      newPrice = Math.ceil(newPrice * priceAugment);
    }

    return total;
  };

  // MAJ de la valeur de l'amélioration et du prix après l'achat.
  const updateClickValue = (addedValue, newPrice) => {
    setClickUpgrade((prev) => ({
      ...prev,
      value: prev.value + (addedValue * rebirth),
      price: newPrice,
      count: prev.count + addedValue,
    }));
  };

  // Achat d'améliorations lorsque le bouton est cliqué.
  const buyClickUpgrade = () => {
    const totalCost = calculateTotalCost();

    // money est suffisant ou non pour acheter les améliorations.
    if (money >= totalCost) {
      setMoney(money - totalCost);
      const newPrice = Math.ceil(clickUpgrade.price * (priceAugment ** multiplier));
      // MAJ de la valeur, du prix de l'amélioration et du compteur.
      updateClickValue(multiplier, newPrice);
    }
  };

  // MAJ la valeur de l'amélioration dans App.
  useEffect(() => {
    update(clickUpgrade.value);
  }, [clickUpgrade.value]);

  useEffect(() => {
    setClickUpgrade((prev) => ({
      ...prev,
      value: baseValue * rebirth,
      price: basePrice,
      count: 0,
    }));
  }, [rebirth]);

  return (
    <button
      className={money < calculateTotalCost() ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={buyClickUpgrade}
      disabled={money < calculateTotalCost()}
    >
      <p className="upgrade__name">Click</p>
      <p className={money < calculateTotalCost() ? 'upgrade__cost upgrade--cant-buy__cost' : 'upgrade__cost upgrade--buy__cost'}>
        {`$${format(calculateTotalCost())}`}
      </p>

    </button>
  );
}

ClickUpgrade.propTypes = {
  money: PropTypes.number.isRequired,
  setMoney: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  rebirth: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired,
};

export default ClickUpgrade;
