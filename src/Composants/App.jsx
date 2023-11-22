import React, { useState } from 'react';

import '../style/css/reset.css';
import '../style/css/main.css';

import Counter from './Counter';
import CounterDiamond from './CounterDiamond';
import FlyingKoala from './FlyingKoala';
import KoalaButton from './KoalaButton';
import ClickUpgrade from './ClickUpgrade';
import AutoClick from './AutoClick';
import Multiplier from './Multiplier';
import DiamondChest from './DiamondChest';

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
    <main className="app">
      <section className="app__counters">
        <Counter money={money} className="app__money" />
        <CounterDiamond diamond={diamond} className="app__diamonds" />
      </section>
      <KoalaButton
        money={money}
        setMoney={setMoney}
        diamond={diamond}
        setDiamond={setDiamond}
        spawn={spawnFlyingKoala}
        click={clickValue}
        className="app__koalaButton"
      />
      <section className="app__diamond-chest">
        <DiamondChest diamond={diamond} setDiamond={setDiamond} className="app__chest" />
      </section>
      <FlyingKoala koalas={flyingKoalas} className="app__flying-koala" />
      <Multiplier className="app__multiplier" setMultiplier={setMultiplier} multiplier={multiplier} />
      <section className="app__upgrades">
        <ClickUpgrade
          className="app__clickUpgrade"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          update={setClickValue}
        />
        <AutoClick
          className="app__autoClick"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
        />
      </section>
    </main>
  );
}

export default App;
