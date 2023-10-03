import React from 'react';
import PropTypes from 'prop-types';

function FlyingKoala({ koalas }) {
  return (
    <div>
      {koalas.map((koala) => (
        <img
          key={koala.id}
          src="/images/teteKoala.png"
          alt="Flying Koala"
          style={{
            position: 'absolute',
            top: koala.top,
            left: koala.left,
            width: '50px',
            height: '50px',
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
