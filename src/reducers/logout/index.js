import logoutInitialState from '../../store/initialState';
import logoutReducer from './logoutReducer';

/**
* This is where we update logoutInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = logoutInitialState, action) => {
  const Logout = logoutReducer(state, action);
  return (Logout || state);
};
