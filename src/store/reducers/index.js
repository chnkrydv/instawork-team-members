import { combineReducers } from 'redux';

import app from './app.reducer';
import members from './members.reducer';
import editingMember from './editingMember.reducer';

export default combineReducers({
  app,
  members,
  editingMember,
});