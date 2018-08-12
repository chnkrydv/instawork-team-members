import React, { Component } from 'react';
import { connect } from 'react-redux';

import './root.css';
import { Team, Member } from './pages/';

const Root = ({ currentPage }) => {
  const getPage = () => currentPage === 'team' ? (<Team />) : (<Member />);

  return (
    <div className="root">
      {getPage()}
    </div>
  );
}

const mapStateToProps = state => ({
  currentPage: state.app.currentPage
})


export default connect(mapStateToProps)(Root);
