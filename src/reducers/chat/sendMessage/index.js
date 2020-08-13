import sendChatMessageInitialState from '../../../store/initialState';
import sendChatsMessagesReducer from './sendChatsMessagesReducer';

/**
* This is where we update  sendChatMessageInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = sendChatMessageInitialState, action) => {
  const sendChatsMessages = sendChatsMessagesReducer(state, action);
  return (sendChatsMessages || state);
};
