import React from 'react';
import PropTypes from 'prop-types';

function KoalaButton({ onClick }) {
  return (
    <img
      src="/images/koala.png"
      alt="Cliquez-moi!"
      onClick={onClick}
      className="koala"
      style={{ cursor: 'pointer' }}
    />
  );
}

KoalaButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default KoalaButton;
