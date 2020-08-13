import fetchRejectedServiceInitialState from '../../../store/initialState';
import masterRejectedReducer from './masterRejectedReducer';

/**
* This is where we update fetchRejectedServiceInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = fetchRejectedServiceInitialState, action) => {
  const masterRejected = masterRejectedReducer(state, action);
  return (masterRejected || state);
};
