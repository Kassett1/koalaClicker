import React from 'react';
import PropTypes from 'prop-types';

function FlyingKoala({ koalas }) {
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
};

export default FlyingKoala;
