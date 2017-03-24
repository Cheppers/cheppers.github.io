import { combineReducers } from 'redux';
import repos from './repos';
import members from './members';


const rootReducer = combineReducers({
  repos,
  members,
});

export default rootReducer;
