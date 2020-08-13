import fetchPendingServicesInitialState from '../../../store/initialState';
import masterPendingReducer from './masterPendingReducer';

/**
* This is where we update fetchPendingServicesInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = fetchPendingServicesInitialState, action) => {
  const masterPending = masterPendingReducer(state, action);
  return (masterPending || state);
};
