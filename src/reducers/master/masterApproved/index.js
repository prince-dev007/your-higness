import fetchApprovedServiceInitialState from '../../../store/initialState';
import masterApprovedReducer from './masterApprovedReducer';

/**
* This is where we update fetchApprovedServiceInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = fetchApprovedServiceInitialState, action) => {
  const masterApproved = masterApprovedReducer(state, action);
  return (masterApproved || state);
};
