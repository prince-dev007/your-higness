import loginMasterInitialState from '../../../store/initialState';
import loginMasterReducer from './loginMasterReducer';

/**
* This is where we update loginMasterInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = loginMasterInitialState, action) => {
  const masterLogin = loginMasterReducer(state, action);
  return (masterLogin || state);
};
