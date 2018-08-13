import React from 'react';
import PropTypes from 'prop-types';

const Snackbar = ({ message, show }) => {
  return (
    <div
      className={`snackbar ${show ? 'snackbar--show' : ''}`}
      children={message}
    />
  );
}

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired
}

export default Snackbar;
