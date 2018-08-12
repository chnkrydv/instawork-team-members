import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ radios, onToggle }) => {
  return (
    <Fragment>
      {radios.map((radio, i) => 
        <RadioButton
          key={i}
          label={radio.label}
          isSelected={radio.isSelected}
          onSelect={() => onToggle(radio.name)}
        />
      )}
    </Fragment>
  );
}

const RadioButton = ({ label, isSelected, onSelect }) => {
  return (
    <div
      className="radio"
      onClick={onSelect}
    >
      <div
        className={`radio__label ${isSelected && 'radio__label--selected'}`}
      >
        {label}
      </div>
      <div className={`radio__circle ${isSelected && 'radio__circle--selected'}`}>
        <div className={`radio__circle__dot ${!isSelected && 'hidden'}`}></div>
      </div>
    </div>
  );
}

RadioGroup.propTypes = {
  radios: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string,
    isSelected: PropTypes.bool
  })).isRequired,
  onToggle: PropTypes.func.isRequired
}

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired
}

export default RadioGroup;
