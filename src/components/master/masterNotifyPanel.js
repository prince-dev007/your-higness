/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * This is NoficationPanel class which hold view Nofication component.
 */
class NoficationPanel extends Component {
  render() {
    const { notifyProps } = this.props;
    return (
      <div>
        <div className="notification-header">
          <p>Notifications</p>
        </div>


        <div className="notification-content">

          {
              notifyProps.masterNotificationLoading === true
              && notifyProps.masterNotificationData.data
                ? (
                  notifyProps.masterNotificationData.data.map((notification) => (
                    <div className="content" key={notification.id}>
                      <div> { notification.notification }.</div>
                      <div className="notification-date"> {new Date(notification.createdAt).toDateString()} {new Date(notification.createdAt).toLocaleTimeString()}.</div>
                    </div>
                  ))
                )
                : (

                  <div className="content">
                    <div className="notification"> There is no notification at the moment.</div>
                  </div>

                )
            }

        </div>


        <div className="notification-footer">
          <p>Show all Notifications</p>
        </div>
      </div>
    );
  }
}

NoficationPanel.defaultProps = { notifyProps: {}, };

NoficationPanel.propTypes = { notifyProps: PropTypes.shape(), };
export default NoficationPanel;
