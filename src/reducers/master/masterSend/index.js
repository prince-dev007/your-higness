import masterSendMessageInitialState from '../../../store/initialState';
import masterSendReducer from './masterSendReducer';

/**
* This is where we update masterSendMessageInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = masterSendMessageInitialState, action) => {
  const masterSend = masterSendReducer(state, action);
  return (masterSend || state);
};
