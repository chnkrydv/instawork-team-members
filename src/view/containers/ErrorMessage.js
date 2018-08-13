import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideErrorMessage } from '../../store/actions';
import { Snackbar } from '../components';

const ErrorMessage = ({ errorMessage, hideErrorMessage }) => {
  if(errorMessage) setTimeout(() =>hideErrorMessage(), 2980);

  return (
    <Snackbar
      message={errorMessage}
      show={!!errorMessage}
    />
  );
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired(),
  hideErrorMessage: PropTypes.func.isRequired()
}

const mapStateToProps = state => ({
  errorMessage: state.app.errorMessage
});

const mapDispatchToProps = dispatch => ({
  hideErrorMessage: () => dispatch(hideErrorMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
