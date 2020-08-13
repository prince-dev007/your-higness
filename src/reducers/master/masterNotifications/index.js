import viewNotificationsServiceInitialState from '../../../store/initialState';
import masterViewNotificationsReducer from './masterViewNotificationsReducer';

/**
* This is where we update viewNotificationsServiceInitialState.
* @param {object} state state object.
* @param {object}  action action.
* @returns {object} data.
*/
export default (state = viewNotificationsServiceInitialState, action) => {
  const masterViewNotifications = masterViewNotificationsReducer(state, action);
  return (masterViewNotifications || state);
};
