import React from 'react';
import { connect } from 'react-redux';

import './root.css';
import { Team, Member } from './pages/';
import { ErrorMessage } from '../view/containers/';

const Root = ({ currentPage }) => {
  const getPage = () => currentPage === 'team' ? (<Team />) : (<Member />);

  return (
    <div className="root">
      {getPage()}
      <ErrorMessage />
    </div>
  );
}

const mapStateToProps = state => ({
  currentPage: state.app.currentPage
})


export default connect(mapStateToProps)(Root);
