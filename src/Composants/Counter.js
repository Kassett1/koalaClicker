import React from 'react';
import PropTypes from 'prop-types';

function Counter({ score }) {
  return (
    <div>
      Koalas:
      {' '}
      {score}
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Counter;
