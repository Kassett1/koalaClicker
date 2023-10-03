import React from 'react';
import PropTypes from 'prop-types';

function KoalaButton({ onClick }) {
  return (
    <img
      src="/images/koala.png"
      alt="Clickable Koala"
      onClick={onClick}
      className="koala"
      style={{
        cursor: 'pointer',
        width: '600px',
        height: '600px',
      }}
    />
  );
}

KoalaButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default KoalaButton;
