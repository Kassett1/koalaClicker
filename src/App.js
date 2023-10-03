import React, { useState, useEffect, useRef } from 'react';
import Compteur from './Composants/Compteur';
import FlyingKoala from './Composants/FlyingKoala';
import KoalaButton from './Composants/KoalaButton';
import IncrClique from './Composants/IncrClique';
import AutoClick from './Composants/AutoClick';
import Multiplicateur from './Composants/Multiplicateur';
import './css/App.css';
import './css/reset.css';

function App() {
  const [count, setCount] = useState(0);
  const [koalasFlying, setKoalasFlying] = useState([]);
  const [clickValue, setClickValue] = useState(1000000);
  const [autoClickValue, setAutoClickValue] = useState(0);
  const [prix, setPrixValue] = useState(50);
  const [prixAutoClick, setPrixACValue] = useState(1000);
  const [cpt, setCpt] = useState(0);
  const [cptAC, setCptAC] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const autoClickValueRef = useRef(autoClickValue);

  const flyingKoala = () => {
    const newKoala = {
      id: Date.now(),
      top: `${Math.random() * window.innerHeight}px`,
      left: `${Math.random() * window.innerWidth}px`,
    };
    setKoalasFlying([...koalasFlying, newKoala]);

    setTimeout(() => {
      setKoalasFlying((prevKoalas) => prevKoalas.filter((koala) => koala.id !== newKoala.id));
    }, 1000);
  };

  const incrementCounter = () => {
    setCount(count + clickValue);
    flyingKoala();
  };

  const incrementAutoClick = () => {
    setCount((prevCount) => prevCount + autoClickValueRef.current);
  };

  const buyUpgrade = () => {
    const totalCost = prix * multiplier;
    setCount(count - Math.ceil(totalCost));
    setClickValue(clickValue + multiplier);
    setPrixValue(Math.ceil(prix * 1.2 * multiplier));
    setCpt(cpt + multiplier);
  };

  const autoClick = () => {
    const totalCost = prixAutoClick * multiplier * 1.2;
    setCount(count - Math.ceil(totalCost));
    setAutoClickValue((prevValue) => prevValue + multiplier);
    autoClickValueRef.current = autoClickValue + multiplier;
    setPrixACValue(Math.ceil(totalCost));
    setCptAC(cptAC + multiplier);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      incrementAutoClick();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Compteur count={count} />
      <KoalaButton onClick={incrementCounter} />
      <FlyingKoala koalasFlying={koalasFlying} />
      <Multiplicateur setMultiplier={setMultiplier} multiplicateur={multiplier} />
      <IncrClique
        count={count}
        onBuyUpgrade={buyUpgrade}
        prix={prix}
        cpt={cpt}
        multiplicateur={multiplier}
      />
      <AutoClick
        count={count}
        autoClick={autoClick}
        prix={prixAutoClick}
        cpt={cptAC}
        multiplicateur={multiplier}
      />
    </div>
  );
}

export default App;
