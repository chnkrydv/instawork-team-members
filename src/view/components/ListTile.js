import React from 'react';
import PropTypes from 'prop-types';

import { stringer } from '../../utils/';

const ListTile = ({ firstName, lastName, email, phone, isAdmin, onClick }) => {
  const { capitalizer } =  stringer;
  return (
    <div className="list-tile" onClick={onClick}>
      <img className="list-tile__profile-pic" src={'https://www.oncode.it/wp-content/themes/oncode-wp-theme/assets/img/placeholder.jpg'}/>
      <div className="list-tile__name">{capitalizer(firstName) + ' ' + capitalizer(lastName) + (isAdmin ? ' (admin)' : '')}</div>
      <div className="list-tile__phone">{phone}</div>
      <div className="list-tile__email">{email}</div>
    </div>
  );
}

ListTile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default ListTile;
