import approvePendingServiceInitialState from '../../../store/initialState';
import masterApproveReducer from './masterApproveReducer';

/**
* This is where we update approvePendingServiceInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = approvePendingServiceInitialState, action) => {
  const masterApprove = masterApproveReducer(state, action);
  return (masterApprove || state);
};
