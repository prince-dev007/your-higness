import checkMasterScamInitialState from '../../../store/initialState';
import masterScamReducer from './masterScamReducer';

/**
* This is where we update checkMasterScamInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = checkMasterScamInitialState, action) => {
  const masterScam = masterScamReducer(state, action);
  return (masterScam || state);
};
