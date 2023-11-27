import React from 'react';
import PropTypes from 'prop-types';

function FlyingKoala({
  koalas, hueRotation, saturation, brightness,
}) {
  return (
    <div className="flying-koala">
      {koalas.map((koala) => (
        <img
          key={koala.id}
          src="/images/teteKoala.png"
          alt="Flying Koala"
          className="flying-koala__img"
          style={{
            position: 'absolute',
            top: koala.top,
            left: koala.left,
            width: '3vw',
            height: 'auto',
            filter: `hue-rotate(${hueRotation}deg) saturate(${saturation}) brightness(${brightness})`,
          }}
        />
      ))}
    </div>
  );
}

FlyingKoala.propTypes = {
  koalas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      top: PropTypes.string.isRequired,
      left: PropTypes.string.isRequired,
    }),
  ).isRequired,
  hueRotation: PropTypes.number.isRequired,
  saturation: PropTypes.number.isRequired,
  brightness: PropTypes.number.isRequired,
};

export default FlyingKoala;
