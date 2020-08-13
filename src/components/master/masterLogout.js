/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutMasterAction } from '../../actions';

/**
 * This is MasterLogout class which hold Master Logout component.
 */
class MasterLogout extends Component {
  logoutMaster(key) {
    key.preventDefault();
    const { logoutCurrentMaster } = this.props;
    const masterSession = localStorage.getItem('masterSessionID');
    if (masterSession) {
      logoutCurrentMaster(masterSession);
    } else {
      logoutCurrentMaster(masterSession);
    }
  }

  render() {
    const { loggedout, loggedoutData } = this.props;

    if (loggedout !== null) {
      sessionStorage.clear();
      localStorage.removeItem('masterName');
      localStorage.removeItem('masterEmail');
      localStorage.removeItem('masterSessionID');
      localStorage.removeItem('masterLoginMessage');

      console.log(loggedoutData);

      setTimeout(() => {
        window.location.replace('/master-dashbord-login');
        window.location.reload(1);
      }, 1000);
    }

    return (
      <div>
        <ul>

          <li><div onClick={(key) => { this.logoutMaster(key); }}>Logout</div></li>

        </ul>
      </div>
    );
  }
}

MasterLogout.defaultProps = {
  loggedout: null,
  loggedoutData: {},
  logoutCurrentMaster: PropTypes.func,
};

MasterLogout.propTypes = {
  loggedout: PropTypes.bool,
  loggedoutData: PropTypes.shape(),
  logoutCurrentMaster: PropTypes.func,
};


const mapStateToProps = ({ logoutMasterInitialState }) => ({
  loggedout: logoutMasterInitialState.loggedout,
  loggedoutData: logoutMasterInitialState.data,
});
const mapDispatchToProps = (dispatch) => ({ logoutCurrentMaster: (masterSession) => { dispatch(logoutMasterAction(masterSession)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(MasterLogout);
