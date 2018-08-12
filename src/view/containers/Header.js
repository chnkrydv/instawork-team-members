import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gotoAddMemberPage, discardEditing } from '../../store/actions';

const Header = ({ title, subtitle, currentPage, count, gotoAddMemberPage, discardEditing }) => {
  const isCloseButton = currentPage !== 'team';
  
  return (
    <div className="header">
      <div className="header__title">{title}</div>
      <div className="header__subtitle">{subtitle}</div>
      <div
        className={`header__button ${isCloseButton && 'header__button--close'}`}
        onClick={() => isCloseButton ? discardEditing(count) : gotoAddMemberPage()}
        children="+"
      />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  gotoAddMemberPage: PropTypes.func.isRequired,
  discardEditing: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  currentPage: state.app.currentPage,
  count: state.members.count
});

const mapDispatchToProps = dispatch => ({
  gotoAddMemberPage: () => dispatch(gotoAddMemberPage()),
  discardEditing: (membersCount) => dispatch(discardEditing(membersCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
