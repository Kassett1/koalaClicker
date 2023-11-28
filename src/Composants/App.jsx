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
import Rebirth from './Rebirth';
import SpeedAutoClick from './SpeedAutoClick';
import PowerClick from './PowerClick';
import ColorChange from './ColorChange';
import DiamondUpgrade from './DiamondUpgrade';
import AutoDiamond from './AutoDiamond';
import SuperClick from './SuperClick';
import SuperAuto from './SuperAuto';

function App() {
  const [money, setMoney] = useState(0);
  const [diamond, setDiamond] = useState(0);
  const [flyingKoalas, setFlyingKoalas] = useState([]);
  const [multiplier, setMultiplier] = useState(1);
  const [clickValue, setClickValue] = useState(1);
  const [rebirthValue, setRebirthValue] = useState(1);
  const [IntervalTime, setIntervalTime] = useState(1000);
  const [hueRotation, setHueRotation] = useState(0);
  const [saturation, setSaturation] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const [diamondUpgrade, setDiamondUpgrade] = useState(0);

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

  // Affiche les nombres avec des lettres
  const formatNumber = (originalNum) => {
    if (originalNum < 1000) {
      return originalNum.toString();
    }
    let num = originalNum;
    const units = ['K', 'M', 'B', 'T', 'Q', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ'];
    let unitIndex = -1;

    while (num >= 1000 && unitIndex < units.length - 1) {
      num /= 1000;
      unitIndex += 1;
    }

    return num.toFixed(2) + units[unitIndex];
  };

  return (
    <main className="app">
      <section className="app__counters">
        <Counter
          money={money}
          className="app__money"
          hueRotation={hueRotation}
          saturation={saturation}
          brightness={brightness}
          format={formatNumber}
        />
        <CounterDiamond
          diamond={diamond}
          className="app__diamonds"
          format={formatNumber}
        />
      </section>
      <KoalaButton
        money={money}
        setMoney={setMoney}
        diamond={diamond}
        setDiamond={setDiamond}
        spawn={spawnFlyingKoala}
        click={clickValue}
        hueRotation={hueRotation}
        saturation={saturation}
        brightness={brightness}
        diamondUpgrade={diamondUpgrade}
        className="app__koalaButton"
      />
      <DiamondChest diamond={diamond} setDiamond={setDiamond} className="app__chest" />
      <FlyingKoala
        koalas={flyingKoalas}
        className="app__flying-koala"
        hueRotation={hueRotation}
        saturation={saturation}
        brightness={brightness}
      />
      <Multiplier className="app__multiplier" setMultiplier={setMultiplier} multiplier={multiplier} />
      <section className="app__upgrades">
        <ClickUpgrade
          className="app__clickUpgrade"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          update={setClickValue}
          rebirth={rebirthValue}
          format={formatNumber}
        />
        <AutoClick
          className="app__autoClick"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          rebirth={rebirthValue}
          setIntervalTime={setIntervalTime}
          intervalTime={IntervalTime}
          format={formatNumber}
        />
        <DiamondUpgrade
          className="app__diamondUpgrade"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          update={setDiamondUpgrade}
          rebirth={rebirthValue}
          format={formatNumber}
        />
        <Rebirth
          className="app__rebirth"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          update={setRebirthValue}
          format={formatNumber}
        />
        <ColorChange
          className="app__colorChange"
          diamond={diamond}
          setDiamond={setDiamond}
          setHueRotation={setHueRotation}
          setSaturation={setSaturation}
          setBrightness={setBrightness}
        />
        <SuperClick
          className="app__superclick"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          update={setClickValue}
          rebirth={rebirthValue}
          format={formatNumber}
        />
        <SuperAuto
          className="app__superauto"
          money={money}
          setMoney={setMoney}
          multiplier={multiplier}
          rebirth={rebirthValue}
          setIntervalTime={setIntervalTime}
          intervalTime={IntervalTime}
          format={formatNumber}
        />
        <AutoDiamond
          className="app__autoDiamond"
          setDiamond={setDiamond}
          multiplier={multiplier}
          rebirth={rebirthValue}
          money={money}
          setMoney={setMoney}
          format={formatNumber}
        />
        <PowerClick
          className="app__power-click"
          diamond={diamond}
          setDiamond={setDiamond}
          clickValue={clickValue}
          setClickValue={setClickValue}
          format={formatNumber}
        />
        <SpeedAutoClick
          className="app__speed-autoclick"
          diamond={diamond}
          setDiamond={setDiamond}
          multiplier={multiplier}
          rebirth={rebirthValue}
          setIntervalTime={setIntervalTime}
          intervalTime={IntervalTime}
          format={formatNumber}
        />
      </section>
    </main>
  );
}

export default App;
