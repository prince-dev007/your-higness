import checkRegisteredServiceTypesInitialState from '../../../store/initialState';
import checkRegisteredServiceReducer from './checkRegisteredServiceReducer';

/**
* This is where we update checkRegisteredServiceTypesInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = checkRegisteredServiceTypesInitialState, action) => {
  const checkRegisteredService = checkRegisteredServiceReducer(state, action);
  return (checkRegisteredService || state);
};
