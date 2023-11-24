import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Rebirth({
  money, setMoney, multiplier, update,
}) {
  const [rebirth, setRebirth] = useState({
    value: 1,
    price: 1000000,
    count: 0,
  });

  const priceAugment = 10;

  const calculateTotalCost = () => {
    let total = 0;
    let newPrice = rebirth.price;

    for (let i = 0; i < multiplier; i += 1) {
      total += newPrice;
      newPrice = Math.ceil(newPrice * priceAugment);
    }
    return total;
  };

  const updateRebirthValue = (addedValue, newPrice) => {
    setRebirth((prev) => ({
      ...prev,
      value: prev.value + addedValue,
      price: newPrice,
      count: prev.count + addedValue,
    }));
  };

  const buyRebirth = () => {
    const totalCost = calculateTotalCost();

    if (money >= totalCost) {
      setMoney(money - totalCost);
      const newPrice = Math.ceil(rebirth.price * (priceAugment ** multiplier));

      updateRebirthValue(multiplier, newPrice);
    }
  };

  useEffect(() => {
    update(rebirth.value);
    setMoney(0);
  }, [rebirth.value]);

  return (
    <button
      className={money < calculateTotalCost() ? 'upgrade upgrade--cant-buy' : 'upgrade upgrade--buy'}
      type="button"
      onClick={buyRebirth}
      disabled={money < calculateTotalCost()}
    >
      <p className="upgrade__name">Rebirth</p>
      <p className={money < calculateTotalCost() ? 'upgrade__cost upgrade--cant-buy__cost' : 'upgrade__cost upgrade--buy__cost'}>
        {`$${calculateTotalCost()}`}
      </p>

    </button>
  );
}

Rebirth.propTypes = {
  money: PropTypes.number.isRequired,
  setMoney: PropTypes.func.isRequired,
  multiplier: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
};

export default Rebirth;
