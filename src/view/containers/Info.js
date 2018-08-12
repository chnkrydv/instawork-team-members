import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Textbox } from '../components/';
import { infoChange, validateInfo } from '../../store/actions';

const Info = ({ firstName, lastName, email, phone, infoChange, validateInfo }) => {
  const fields = { firstName, lastName, email, phone };
  
  return (
    <div className="info">
      <div className="info__header">Info</div>
      {Object.keys(fields).map((key, i) => {
        return (
          <Textbox
            key={i}
            value={fields[key].value}
            hasError={fields[key].hasError}
            placeholder={fields[key].placeholder}
            onChange={({target}) => infoChange(key, target.value)}
            onBlur={({target}) => validateInfo(key, target.value)}
          />
        );
      })}
    </div>
  );
}

const inputFieldsType = {
  value: PropTypes.string,
  hasError: PropTypes.bool,
  placeholder: PropTypes.string
}

Info.propTypes = {
  firstName: PropTypes.objectOf(inputFieldsType),
  lastName: PropTypes.objectOf(inputFieldsType),
  email: PropTypes.objectOf(inputFieldsType),
  phone: PropTypes.objectOf(inputFieldsType),
  infoChange: PropTypes.func.isRequired,
  validateInfo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  firstName: state.editingMember.firstName,
  lastName: state.editingMember.lastName,
  email: state.editingMember.email,
  phone: state.editingMember.phone
})

const mapDispatchToProps = dispatch => ({
  infoChange: (fieldKey, value) => dispatch(infoChange(fieldKey, value)),
  validateInfo: (fieldKey, value) => dispatch(validateInfo(fieldKey, value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Info);
