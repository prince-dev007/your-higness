import rejectPendingServiceInitialState from '../../../store/initialState';
import masterRejectReducer from './masterRejectReducer';

/**
* This is where we update rejectPendingServiceInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = rejectPendingServiceInitialState, action) => {
  const masterReject = masterRejectReducer(state, action);
  return (masterReject || state);
};
