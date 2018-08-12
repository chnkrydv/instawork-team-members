import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Header, ListView } from '../containers/';

const Team = () => {
  return (
    <Fragment>
      <Header />
      <ListView />
    </Fragment>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Team);
