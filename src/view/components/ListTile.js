import React from 'react';
import PropTypes from 'prop-types';

const ListTile = ({ imageSrc, header, firstSubheader, secondSubheader, onClick }) => {
  return (
    <div className="list-tile" onClick={onClick}>
      <img
        className="list-tile__profile-pic"
        src={imageSrc || 'https://www.oncode.it/wp-content/themes/oncode-wp-theme/assets/img/placeholder.jpg'}
      />
      <div
        className="list-tile__name"
        children={header}
      />
      <div
        className="list-tile__phone"
        children={firstSubheader}
      />
      <div
        className="list-tile__email"
        children={secondSubheader}
      />
    </div>
  );
}

ListTile.propTypes = {
  imageSrc: PropTypes.string,
  header: PropTypes.string.isRequired,
  firstSubheader: PropTypes.string.isRequired,
  secondSubheader: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ListTile;
