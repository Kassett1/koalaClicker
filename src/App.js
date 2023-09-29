import React, { useState } from 'react';
import Compteur from './Composants/Compteur';
import FlyingKoala from './Composants/FlyingKoala';
import KoalaButton from './Composants/KoalaButton';
import IncrClique from './Composants/IncrClique';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [koalasFlying, setKoalasFlying] = useState([]);
  const [clickValue, setClickValue] = useState(1);
  const [prix, setPrixValue] = useState(50);

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

  const buyUpgrade = () => {
    setCount(count - prix);
    setClickValue(clickValue + 1);
    setPrixValue(prix * 2);
  };

  return (
    <div className="App">
      <Compteur count={count} />
      <KoalaButton onClick={incrementCounter} />
      <FlyingKoala koalasFlying={koalasFlying} />
      <IncrClique count={count} onBuyUpgrade={buyUpgrade} prix={prix} />
    </div>
  );
}

export default App;
