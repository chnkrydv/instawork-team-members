import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListTile } from '../components';
import { gotoEditMemberPage } from '../../store/actions';

const ListView = ({ members, gotoEditMemberPage }) => {
  return (
    <Fragment>
      {members.map( (member, i) => (
        <ListTile
          key={i}
          isAdmin={member.isAdmin}
          firstName={member.firstName.value}
          lastName={member.lastName.value}
          phone={member.phone.value}
          email={member.email.value}
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
