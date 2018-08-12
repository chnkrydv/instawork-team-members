import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { dataTemplate } from '../../utils/';
import { roleChange } from '../../store/actions';
import { Radio } from '../components/';

const Role = ({ isAdmin, roleChange }) => {
  const { updatedRoles } = dataTemplate;
  const radios = updatedRoles(isAdmin ? 'admin' : 'regular');
  const onToggle = (roleName) => {
    roleChange(roleName === 'admin');
  }

  return (
    <div className="role">
      <div className="role__header">Role</div>
      <Radio
        radios={radios}
        onToggle={onToggle}
      />
    </div>
  );
}

Role.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  roleChange: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAdmin: state.editingMember.isAdmin,
})

const mapDispatchToProps = dispatch => ({
  roleChange: (isAdmin) => dispatch(roleChange(isAdmin))
})


export default connect(mapStateToProps, mapDispatchToProps)(Role);
