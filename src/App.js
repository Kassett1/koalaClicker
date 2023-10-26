import React, { useState, useEffect, useRef } from 'react';
import Counter from './Composants/Counter';
import FlyingKoala from './Composants/FlyingKoala';
import KoalaButton from './Composants/KoalaButton';
import ClickUpgrade from './Composants/ClickUpgrade';
import AutoClick from './Composants/AutoClick';
import Multiplier from './Composants/Multiplier';
import './css/reset.css';
import './css/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [flyingKoalas, setFlyingKoalas] = useState([]);

  const [clickUpgrade, setClickUpgrade] = useState({
    value: 1000000,
    price: 50,
    count: 0,
  });

  const [autoClick, setAutoClick] = useState({
    value: 0,
    price: 1000,
    count: 0,
  });

  const [multiplier, setMultiplier] = useState(1);

  const autoClickValueRef = useRef(autoClick.value);

  // Fonction pour générer un FlyingKoala à l'écran
  const spawnFlyingKoala = () => {
    const newKoala = {
      id: Date.now(),
      top: `${Math.random() * window.innerHeight}px`,
      left: `${Math.random() * window.innerWidth}px`,
    };
    setFlyingKoalas([...flyingKoalas, newKoala]);

    setTimeout(() => {
      setFlyingKoalas((prevKoalas) => prevKoalas.filter((koala) => koala.id !== newKoala.id));
    }, 1000);
  };

  // Fonction pour incrémenter le score
  const incrementScore = () => {
    setScore(score + clickUpgrade.value);
    spawnFlyingKoala();
  };

  // Fonction pour l'auto-clic
  const applyAutoClick = () => {
    setScore((prevScore) => prevScore + autoClickValueRef.current);
  };

  // Fonction de calcul des coûts des augmentation
  const calculateTotalCost = (
    baseCost,
    multiplierArg,
    minPercent,
    maxPercent,
  ) => {
    let total = 0;
    let baseCostCopy = baseCost;

    for (let i = 0; i < multiplierArg; i += 1) {
      total += baseCostCopy;
      const randomIncrement = minPercent + Math.random() * (maxPercent - minPercent);
      baseCostCopy = Math.ceil(baseCostCopy * (1 + randomIncrement / 100));
    }

    return total;
  };

  // Fonction pour acheter l'amélioration de clic
  const buyClickUpgrade = () => {
    const totalCost = calculateTotalCost(
      clickUpgrade.price,
      multiplier,
      2.5,
      4,
    );
    if (score >= totalCost) {
      setScore(score - Math.ceil(totalCost));
      setClickUpgrade((prev) => ({
        ...prev,
        value: prev.value + multiplier,
        price: Math.ceil(totalCost),
        count: prev.count + multiplier,
      }));
    }
  };

  // Fonction pour acheter l'amélioration d'auto-clic
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
    // Crée un interval pour appliquer l'auto-clic toutes les secondes
    const interval = setInterval(applyAutoClick, 1000);

    // Nettoie l'intervalle lorsque le composant est démonté ou mis à jour
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <section className="cptBouton">
        <Counter score={score} />
        <KoalaButton onClick={incrementScore} />
      </section>
      <FlyingKoala koalas={flyingKoalas} />
      <Multiplier className="multiplier" setMultiplier={setMultiplier} multiplier={multiplier} />
      <section className="ameliorations">
        <ClickUpgrade
          className="clickUpgrade"
          score={score}
          onBuy={buyClickUpgrade}
          upgrade={clickUpgrade}
          multiplier={multiplier}
          totalCost={calculateTotalCost(clickUpgrade.price, multiplier, 2.5, 4)}
        />
        <AutoClick
          className="autoClick"
          score={score}
          onBuy={buyAutoClickUpgrade}
          upgrade={autoClick}
          multiplier={multiplier}
        />
      </section>
    </div>
  );
}

export default App;
