import axios from 'axios';
import { backendURLs } from '../../helpers';
import { viewChatsContactsTypes } from '../../actionTypes';


/**
* Action to view chat contacts from chat table into database with "${backendURLs.BACKEND_URL}/chat-contacts" API.
* @param {string} userSession user token.
* @returns {object}status and contact list.
*/
export const viewChatsContacts = (userSession) => {
  const token = userSession;
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.BACKEND_URL}chat-contacts`, config)
    .then((response) => {
      dispatch({
        type: viewChatsContactsTypes.VIEW_CHATS_CONTACTS_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: viewChatsContactsTypes.VIEW_CHATS_CONTACTS_FAILURE,
        payload: error.response.data
      });
    });
};
