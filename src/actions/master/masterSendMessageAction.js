import axios from 'axios';
import { backendURLs } from '../../helpers';
import { masterSendMessageTypes } from '../../actionTypes';

/**
* Action to send comment to service with "${backendURLs.BACKEND_URL}send-message/${id}" API.
* @param {string} masterSession master Session token.
* @param {integer} id service id.
* @param {string} message master comment.
* @returns {object} message and sent comment.
*/
export const masterSendMessage = (masterSession, id, message) => {
  const config = { headers: { masterSession } };
  return (dispatch) => axios.post(`${backendURLs.BACKEND_URL}send-message/${id}`, { message }, config)
    .then((response) => {
      dispatch({
        type: masterSendMessageTypes.MASTER_SEND_MESSAGE_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: masterSendMessageTypes.MASTER_SEND_MESSAGE_FAILURE,
        payload: error.response
      });
    });
};
