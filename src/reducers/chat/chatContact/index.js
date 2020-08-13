import viewChatsContactsInitialState from '../../../store/initialState';
import viewChatsContactsReducer from './viewChatsContactsReducer';

/**
* This is where we update  viewChatsContactsInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = viewChatsContactsInitialState, action) => {
  const viewChatsContacts = viewChatsContactsReducer(state, action);
  return (viewChatsContacts || state);
};
