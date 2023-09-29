import React from 'react';
import PropTypes from 'prop-types';

function Compteur({ count }) {
  // Test
  return <h1>{count}</h1>;
}

Compteur.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Compteur;
