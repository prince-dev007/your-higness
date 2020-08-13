/* eslint-disable react/jsx-props-no-spreading */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import Kadian from '../../assets/images/dr.kadian.jpg';
import AddHomeScreen from '../common/addHomeScreen';
import CombineIcons from '../common/combineIcons';
import LandingImage from '../common/landingImage';
import SearchDoctor from '../common/searchDoctor';
import { backendURLs } from '../../helpers';
import { loadingApp } from '../../actions';
import Footer from '../common/footer';
import Slides from '../common/slide';
import Logo from '../common/logo';

/**
 * This is user welcome page class which hold user welcome page component.
 */
class WelcomePage extends Component {
  componentDidMount() {
    const { loadApplication } = this.props;
    loadApplication();

    const serverURL = backendURLs.LISTEN_SERVER;
    const socket = openSocket(serverURL);
    socket.on('socket', (data) => {
      console.log(data);
    });
  }

  viewPresident() {
    window.open('https://www.indianveterinaryassociation.in/');
  }

  render() {
    const { serverData, loading } = this.props;

    return (
      <div className="welcome-page">

        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: #ffff; }'}</style>
        </Helmet>

        <header className="welcome-page-header">

          <div className="main">

            <Logo />

            <ul>
              <li className="small-device">
                <span href="/login-user-account" className="url">Veterinarians 🡪</span>
              </li>

              <li>
                <a href="/login-user-account">Login</a>
              </li>

              <span>/</span>

              <li>
                <a href="/register-user-account">Register</a>
              </li>

            </ul>

          </div>

          <div className="our-service">

            <div className="home-demand-service"> SET Appointments, On Demand. </div>

            <div className="error">
              {loading === false
                ? (<h2>Something wrong occured</h2>)
                : (<h2>{serverData.data}</h2>)}
            </div>

          </div>

          <SearchDoctor />

          <CombineIcons />

          <AddHomeScreen />

        </header>

        <div className="welcome-page-body-separator" />

        <div className="welcome-page-body">

          <Slides />

        </div>

        <div className="welcome-page-body-separator" />

        <div className="welcome-page-body">

          <LandingImage />

        </div>

        <div className="welcome-page-body-separator" />

        <div className="welcome-page-body">
          <h1>Our Advisor</h1>
          <div className="experience-desc">

            <div className="locking-content">

              <div className="content">

                <h1 className="opacity">Mission - TEAM IVA 11</h1>
                <p>
                  ● Meager Wages
                </p>

                <p>
                  ● Unemployment
                </p>

                <p>
                  ● Veterinarian Women Empowerment
                </p>

                <button
                  type="button"
                  className="unlock-button"
                  onClick={(key) => { this.viewPresident(key); }}
                >
                Support Here
                </button>

              </div>

              <div className="image main-opacity">
                <img src={Kadian} alt="Icon" className="image-three" />

                <p>
                Councillor World Veterinary Association,
                </p>

                <p>
                President Indian Veterinary Association
                </p>

              </div>


            </div>

            <div className="phone-locking-content">


              <div className="content">

                <h1 className="opacity">Mission - TEAM IVA 11</h1>
                <p>
                  ● Meager Wages
                </p>

                <p>
                  ● Unemployment
                </p>

                <p>
                  ● Veterinarian Women Empowerment
                </p>

                <button
                  type="button"
                  className="unlock-button"
                  onClick={(key) => { this.viewPresident(key); }}
                >
                  Support Here
                </button>

              </div>

              <div className="image main-opacity">
                <img src={Kadian} alt="Icon" className="image-three" />

                <p>
                  Councillor World Veterinary Association,
                </p>

                <p>
                  President Indian Veterinary Association
                </p>

              </div>


            </div>

          </div>
        </div>

        <div>
          <Footer />
        </div>

      </div>
    );
  }
}


WelcomePage.defaultProps = {
  loading: false,
  serverData: {},
  loadApplication: PropTypes.func,
};


WelcomePage.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
