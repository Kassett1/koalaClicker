import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function KoalaButton({
  score, setScore, spawn, click,
}) {
  // Fonction pour incrémenter le score
  const incrementScore = () => {
    setScore(score + click + 1);
    spawn();
  };

  return (
    <div>
      <div className="circle" />
      <img
        src="/images/koala.png"
        alt="Clickable Koala"
        onClick={incrementScore}
        className="koala"
      />
    </div>
  );
}

KoalaButton.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  spawn: PropTypes.func.isRequired,
  click: PropTypes.number.isRequired,
};

export default KoalaButton;
