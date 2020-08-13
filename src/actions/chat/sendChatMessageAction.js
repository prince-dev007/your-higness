import axios from 'axios';
import { backendURLs } from '../../helpers';
import { sendChatMessageTypes } from '../../actionTypes';

/**
* Action to save chat message in chat table into database with "${backendURLs.BACKEND_URL}/chat-board" API.
* @param {string} userSession user token.
* @param {integer} receiverId receiver id.
* @param {string} message message to send.
* @returns {object} a sent data.
*/
export const sendChatMessage = (userSession, receiverId, message) => {
  const token = userSession;
  const config = { headers: { token } };

  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}chat-board`, { receiverId, message }, config)
    .then((response) => {
      dispatch({
        type: sendChatMessageTypes.SEND_CHATS_MESSAGE_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: sendChatMessageTypes.VIEW_CHATS_MESSAGE_FAILURE,
        payload: error.response.data
      });
    });
};
