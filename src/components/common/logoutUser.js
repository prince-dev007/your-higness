/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../../actions';


/**
 * This is LogoutUser class which hold LogoutUser component.
 */
class LogoutUser extends Component {
  handleLogout(key) {
    key.preventDefault();
    const { logoutCurrentUser } = this.props;
    const token = sessionStorage.getItem('token');
    if (token) {
      logoutCurrentUser(token);
    } else {
      window.location.replace('/');
      logoutCurrentUser(token);
    }
  }

  render() {
    const { loggedout } = this.props;

    if (loggedout === true || loggedout === false) {
      sessionStorage.clear();
      localStorage.removeItem('role');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('phone');
      localStorage.removeItem('lastname');
      localStorage.removeItem('firstname');
      localStorage.removeItem('loginMessage');
      localStorage.removeItem('accountOwnerId');

      if (!localStorage.getItem('role') && !localStorage.getItem('token') && !localStorage.getItem('email') && !localStorage.getItem('phone') && !localStorage.getItem('firstname') && !localStorage.getItem('lastname')) {
        setTimeout(() => {
          window.location.replace('/');
        }, 500);
      }
    }

    return (
      <div>
        <ul>

          <li><div onClick={(key) => { this.handleLogout(key); }}>Logout</div></li>

        </ul>
      </div>
    );
  }
}

LogoutUser.defaultProps = {
  loggedout: null,
  logoutCurrentUser: PropTypes.func,
};
LogoutUser.propTypes = {
  loggedout: PropTypes.bool,
  logoutCurrentUser: PropTypes.func,
};


const mapStateToProps = ({ logoutInitialState }) => ({
  loggedout: logoutInitialState.loggedout,
  loggedoutData: logoutInitialState.data,
});
const mapDispatchToProps = (dispatch) => ({ logoutCurrentUser: (token) => { dispatch(logoutUser(token)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(LogoutUser);
