import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function AutoClick({
  score, setScore, multiplier,
}) {
  const [autoClick, setAutoClick] = useState({
    value: 0,
    price: 1000,
    count: 0,
  });

  const autoClickValueRef = useRef(autoClick.value);

  const applyAutoClick = () => {
    setScore((prevScore) => prevScore + autoClickValueRef.current);
  };

  const buyAutoClickUpgrade = () => {
    const totalCost = autoClick.price * multiplier;
    if (score >= totalCost) {
      setScore(score - Math.ceil(totalCost));
      const newValue = autoClick.value + 1;
      setAutoClick((prev) => ({
        ...prev,
        value: newValue,
        price: Math.ceil(prev.price * 1.5),
        count: prev.count + 1,
      }));
      autoClickValueRef.current = newValue;
    }
  };

  useEffect(() => {
    const interval = setInterval(applyAutoClick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      className="upgrades"
      type="button"
      onClick={buyAutoClickUpgrade}
      disabled={score < (autoClick.price * multiplier)}
      style={{ backgroundColor: score < (autoClick.price * multiplier) ? '#5EB9FA' : '#75DE5B' }}
    >
      Cost:
      <br />
      {autoClick.price * multiplier}
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
