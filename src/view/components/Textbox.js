import React from 'react';
import PropTypes from 'prop-types';

const Textbox = ({ value, onChange, onBlur, hasError, placeholder }) => {
  return (
    <input
        type="text"
        className={`textbox ${hasError ? 'red-border' : ''}`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
  );
}

Textbox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  hasError: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default Textbox;
