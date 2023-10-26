import React from 'react';
import PropTypes from 'prop-types';
import '../css/reset.css';
import '../css/App.css';

function KoalaButton({ onClick }) {
  return (
    <div>
      <div className="circle" />
      <img
        src="/images/koala.png"
        alt="Clickable Koala"
        onClick={onClick}
        className="koala"
      />
    </div>
  );
}

KoalaButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default KoalaButton;
