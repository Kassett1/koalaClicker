import React from 'react';
import PropTypes from 'prop-types';

function FlyingKoala({ koalasFlying }) {
  return (
    <>
      {koalasFlying.map((koala) => (
        <img
          key={koala.id}
          src="/images/teteKoala.png"
          alt="Koala volant"
          className="koalaFlying"
          style={{ top: koala.top, left: koala.left, opacity: 1 }}
        />
      ))}
    </>
  );
}

FlyingKoala.propTypes = {
  koalasFlying: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      top: PropTypes.string,
      left: PropTypes.string,
    }),
  ).isRequired,
};

export default FlyingKoala;
