import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { stringer } from '../../utils/';
import { ListTile } from '../components';
import { gotoEditMemberPage } from '../../store/actions';

const ListView = ({ members, gotoEditMemberPage }) => {
  const { capitalizer } = stringer;
  const getHeader = (firstName, lastName, isAdmin) =>
    capitalizer(firstName) + ' ' + capitalizer(lastName) + (isAdmin ? ' (admin)' : '');


  return (
    <Fragment>
      {members.map( (member, i) => (
        <ListTile
          key={i}
          header={getHeader(member.firstName.value, member.lastName.value, member.isAdmin)}
          firstSubheader={member.phone.value}
          secondSubheader={member.email.value}
          onClick={() => gotoEditMemberPage(member)}
        />
      ))}
    </Fragment>
  );
}

ListView.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object),
  gotoEditMemberPage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  members: state.members.list
})

const mapDispatchToProps = dispatch => ({
  gotoEditMemberPage: (member) => dispatch(gotoEditMemberPage(member))
})


export default connect(mapStateToProps, mapDispatchToProps)(ListView);
