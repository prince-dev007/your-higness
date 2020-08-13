import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import Logo from '../common/logo';
import Slides from '../common/slide';
import Footer from '../common/footer';
import { loadingApp } from '../../actions';
import { backendURLs } from '../../helpers';
import LandingImage from '../common/landingImage';
import LoginRegister from '../common/loginRegister';


/**
 * This is Landing class which hold landing component.
 */
class Landing extends Component {
  componentDidMount() {
    const { loadApplication } = this.props;
    loadApplication();

    const serverURL = backendURLs.LISTEN_SERVER;
    const socket = openSocket(serverURL);
    socket.on('socket', (data) => {
      console.log(data);
    });
  }

  render() {
    const { serverData, loading } = this.props;
    return (
      <div>
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: #ffff; }'}</style>
        </Helmet>

        <div className="land-option">

          <Logo />
          <span className="formers">YOUR-HIGHNESS IS FOUNDED IN 2020 BY MR. ARJUN AND MR. PARAS</span>
          <LoginRegister />

        </div>

        <div className="land-divider" />

        <div className="error">
          {loading === false
            ? (<h2>Something wrong occured</h2>)
            : (<h2>{serverData.data}</h2>)}
        </div>

        <Slides />

        <LandingImage />

        <Footer />

      </div>
    );
  }
}

Landing.defaultProps = {
  loading: false,
  serverData: {},
  loadApplication: PropTypes.func,
};

Landing.propTypes = {
  loading: PropTypes.bool,
  serverData: PropTypes.shape(),
  loadApplication: PropTypes.func,
};

const mapStateToProps = ({ commonInitialState }) => (
  {
    loading: commonInitialState.loading,
    serverData: commonInitialState.data
  }
);

const mapDispatchToProps = (dispatch) => ({ loadApplication: () => { dispatch(loadingApp()); }, });

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
