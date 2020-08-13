import axios from 'axios';
import { backendURLs } from '../../helpers';
import { viewChatsMessagesTypes } from '../../actionTypes';

/**
* Action to view chat messages from chat table into database with "${backendURLs.BACKEND_URL}/chat-messages" API.
* @param {string} userSession user token.
* @param {integer} senderId sender id.
* @param {integer} receiverId receiver id.
* @returns {object} status and messages.
*/
export const viewChatsMeesages = (userSession, senderId, receiverId) => {
  const token = userSession;
  const config = { headers: { token } };

  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}chat-messages`, { senderId, receiverId }, config)
    .then((response) => {
      dispatch({
        type: viewChatsMessagesTypes.VIEW_CHATS_MESSAGES_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: viewChatsMessagesTypes.VIEW_CHATS_MESSAGES_FAILURE,
        payload: error.response.data
      });
    });
};
