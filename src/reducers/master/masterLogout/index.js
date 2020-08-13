import logoutMasterInitialState from '../../../store/initialState';
import logoutMasterReducer from './logoutMasterReducer';

/**
* This is where we update logoutMasterInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = logoutMasterInitialState, action) => {
  const logoutMaster = logoutMasterReducer(state, action);
  return (logoutMaster || state);
};
