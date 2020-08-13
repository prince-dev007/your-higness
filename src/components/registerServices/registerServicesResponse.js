/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-one-expression-per-line */

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import HeaderMenu from '../common/headerMenu';
import { checkRegisteredService } from '../../actions';


/**
 * This is RegisterServicesResponse class which hold Register Services Response component.
 */
class RegisterServicesResponse extends Component {
  componentDidMount() {
    const { history } = this.props;

    if (!(localStorage.getItem('token')) && !(localStorage.getItem('lastname')) && !(localStorage.getItem('firstname')) && !(localStorage.getItem('email')) && !(localStorage.getItem('phone'))) {
      history.push('/login-services-account');
    }
  }

  handleTryAgain(key) {
    key.preventDefault();
    window.location.replace('/register-services-account');
  }

  render() {
    const { history } = this.props;

    const getCheckRegisteredData = sessionStorage.getItem('viewedCheckRegisteredData');
    const unStringfiedCheckRegisteredData = JSON.parse(getCheckRegisteredData);

    const getCheckRegisteredLoading = sessionStorage.getItem('viewedCheckRegisteredLoading');
    const unStringfiedCheckRegisteredLoading = JSON.parse(getCheckRegisteredLoading);

    const getServiceData = sessionStorage.getItem('viewedServiceData');
    const unStringfiedServiceData = JSON.parse(getServiceData);

    const getRegisteredServiceLoading = sessionStorage.getItem('viewedRegisteredServiceLoading');
    const unStringfiedRegisteredServiceLoading = JSON.parse(getRegisteredServiceLoading);

    if (unStringfiedCheckRegisteredLoading === true) {
      setTimeout(() => {
        history.push('/user-welcome-dashboard');
      }, 10000);
    }

    if (unStringfiedRegisteredServiceLoading === true) {
      setTimeout(() => {
        history.push('/user-welcome-dashboard');
      }, 10000);
    }

    return (
      <div>
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: rgb(8, 119, 119); }'}</style>
        </Helmet>
        {
          localStorage.getItem('token')
            ? (
              unStringfiedRegisteredServiceLoading === false
                ? (
                  <div>
                    <HeaderMenu sendProps={this.props} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="submit-details">
                      <div className="success-message register-form-error">
                        <Helmet>
                          <style>{'body { background-color: #dadada; }'}</style>
                        </Helmet>

                        <h3> VETERINARIAN’S, WELCOME TO RIVO PETS </h3>
                        <div>
                          {unStringfiedServiceData.data}
                          <br />
                          <button type="submit" className="reset-link" onClick={(key) => { this.handleTryAgain(key); }}>  Try again </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                : unStringfiedRegisteredServiceLoading === true
                  ? (
                    <div>
                      <HeaderMenu sendProps={this.props} />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <div>
                        <div className="response-details">
                          <div className="success-message register-form-error">
                            <Helmet>
                              <style>{'body { background-color: #dadada; }'}</style>
                            </Helmet>

                            <br />
                            <h3> VETERINARIAN’S, WELCOME TO RIVO PETS </h3>
                            <div>
                              <p className="server-feedback">
                                {unStringfiedServiceData.data.data}
                              </p>
                              <section className="server-feedback-section">
                                Hello <span> {unStringfiedServiceData.data.currentService.name} </span>
                                your service is now under verifying by responsible Team. you will be notify once verification is done through email.
                              </section>
                              <br />
                              <a href="/user-welcome-dashboard" className="reset-link"> Go with us </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : unStringfiedCheckRegisteredLoading === true
                    ? (
                      <div>
                        <HeaderMenu sendProps={this.props} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                          <div className="response-details">
                            <div className="success-message register-form-error">
                              <Helmet>
                                <style>{'body { background-color: #dadada; }'}</style>
                              </Helmet>

                              <br />
                              <h3> VETERINARIAN’S, WELCOME TO RIVO PETS </h3>
                              <div>
                                <p className="server-feedback">
                                  {`Service already  ${unStringfiedCheckRegisteredData.data.status}`}
                                </p>
                                <section className="server-feedback-section">
                                          Hello <span> {unStringfiedCheckRegisteredData.data.name} </span>
                                  {unStringfiedCheckRegisteredData.message}.
                                </section>
                                <br />
                                <a href="/user-welcome-dashboard" className="reset-link"> Go with us </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                    : (
                      <div>
                        <HeaderMenu sendProps={this.props} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="submit-details">
                          <div className="success-message register-form-error">
                            <Helmet>
                              <style>{'body { background-color: #dadada; }'}</style>
                            </Helmet>
                            <h3> VETERINARIAN’S, WELCOME TO RIVO PETS </h3>
                            <div>
                              <p className="server-feedback">Oohps something wrong occured</p>
                              <br />
                              <a href="/register-services-account" className="reset-link"> Try again </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
            )
            : history.push('/login-services-account')
                }
      </div>
    );
  }
}

RegisterServicesResponse.defaultProps = { history: {}, };


RegisterServicesResponse.propTypes = { history: PropTypes.shape(), };


const mapStateToProps = ({ registerServiceInitialState, checkRegisteredServiceTypesInitialState }) => ({
  registeredServiceLoading: registerServiceInitialState.registeredService,
  serviceData: registerServiceInitialState.data,

  checkRegisteredLoading: checkRegisteredServiceTypesInitialState.loading,
  checkRegisteredData: checkRegisteredServiceTypesInitialState.data
});

const mapDispatchToProps = (dispatch) => (
  {
    checkCurrentRegisteredService: (token) => {
      dispatch(checkRegisteredService(token));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(RegisterServicesResponse);
