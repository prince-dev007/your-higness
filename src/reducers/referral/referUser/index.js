import referUserInitialState from '../../../store/initialState';
import referUserReducer from './referUserReducer';

/**
* This is where we referUserInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = referUserInitialState, action) => {
  const referUser = referUserReducer(state, action);
  return (referUser || state);
};
