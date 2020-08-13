import viewChatsMessagesInitialState from '../../../store/initialState';
import viewChatsMessagesReducer from './viewChatsMessagesReducer';

/**
* This is where we update  viewChatsMessagesInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = viewChatsMessagesInitialState, action) => {
  const viewChatsMessages = viewChatsMessagesReducer(state, action);
  return (viewChatsMessages || state);
};
