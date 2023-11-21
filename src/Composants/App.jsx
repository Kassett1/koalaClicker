import React, { useState } from 'react';

import '../css/reset.css';
import '../css/App.css';

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
    <main className="App">
      <section className="App__counters">
        <Counter money={money} className="App__money" />
        <CounterDiamond diamond={diamond} className="App__diamonds" />
      </section>
      <section className="App__koalaButton">
        <KoalaButton
          money={money}
          setMoney={setMoney}
          diamond={diamond}
          setDiamond={setDiamond}
          spawn={spawnFlyingKoala}
          click={clickValue}
          className="App__koala"
        />
      </section>
      <DiamondChest diamond={diamond} setDiamond={setDiamond} className="App__chest" />
      <FlyingKoala koalas={flyingKoalas} className="App__flying-koala" />
      <Multiplier className="App__multiplier" setMultiplier={setMultiplier} multiplier={multiplier} />
      <section className="App__upgrades">
        <ClickUpgrade
          className="App__clickUpgrade"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          update={setClickValue}
        />
        <AutoClick
          className="App__autoClick"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
        />
      </section>
    </main>
  );
}

export default App;
