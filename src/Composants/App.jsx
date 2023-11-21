import React, { useState } from 'react';
import Counter from './Counter';
import CounterDiamond from './CounterDiamond';
import FlyingKoala from './FlyingKoala';
import KoalaButton from './KoalaButton';
import ClickUpgrade from './ClickUpgrade';
import AutoClick from './AutoClick';
import Multiplier from './Multiplier';
import '../css/reset.css';
import '../css/App.css';

function App() {
  const [money, setMoney] = useState(0);
  const [diamond, setDiamond] = useState(0);
  const [flyingKoalas, setFlyingKoalas] = useState([]);
  const [multiplier, setMultiplier] = useState(1);
  const [clickValue, setClickValue] = useState(0);

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

  return (
    <div className="App">
      <section className="cptBouton">
        <Counter money={money} />
        <CounterDiamond diamond={diamond} />
        <KoalaButton
          money={money}
          setMoney={setMoney}
          diamond={diamond}
          setDiamond={setDiamond}
          spawn={spawnFlyingKoala}
          click={clickValue}
        />
      </section>
      <FlyingKoala koalas={flyingKoalas} />
      <Multiplier className="multiplier" setMultiplier={setMultiplier} multiplier={multiplier} />
      <section className="ameliorations">
        <ClickUpgrade
          className="clickUpgrade"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          update={setClickValue}
        />
        <AutoClick
          className="autoClick"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
        />
      </section>
    </div>
  );
}

export default App;
