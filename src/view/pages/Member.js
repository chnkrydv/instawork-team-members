import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Header, Info , Role , ActionBar } from '../containers/';

const Member = () => {
  return (
    <Fragment>
      <Header />
      <Info />
      <Role />
      <ActionBar />
    </Fragment>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Member);
