import React from 'react';
import PropTypes from 'prop-types';

function AutoClick({
  count, autoClick, prix, cpt, multiplicateur,
}) {
  return (
    <button
      type="button"
      onClick={autoClick}
      disabled={count < prix}
      style={{ opacity: count < prix * multiplicateur ? 0.5 : 1 }}
    >
      Auto Koala
      <br />
      +1 Koala every seconds
      <br />
      Cost:
      {prix * multiplicateur}
      <br />
      {cpt}
    </button>
  );
}

AutoClick.propTypes = {
  count: PropTypes.number.isRequired,
  autoClick: PropTypes.func.isRequired,
  prix: PropTypes.number.isRequired,
  cpt: PropTypes.number.isRequired,
  multiplicateur: PropTypes.number.isRequired,
};

export default AutoClick;
