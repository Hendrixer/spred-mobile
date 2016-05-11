import { combineReducer } from 'redux';
import { ui } from './ui';
import { user } from './user';

export default combineReducer({
  ui,
  user
});
