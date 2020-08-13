import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';


import Logo from '../common/logo';
import { verifyUser } from '../../actions';
import { validatemptyResetLink, validaterrorRsetLink } from '../../helpers/index';


/**
 * This is RegisterSuccess class which hold Register Success component.
 */
class RegisterSuccess extends Component {
  constructor() {
    super();
    this.state = {
      confirm: 'No corresponding result found',
      fields: false,
      emailclass: '',
      email: '',
      result: '',
    };
  }

  getCredential(key) {
    key.preventDefault();
    this.unHideFields();
  }

  unHideFields() {
    this.setState({ fields: true });
  }

  hideFields() {
    this.setState({ fields: false });
  }

  handleChange(key) {
    // return to a normal class again
    this.setState({
      emailclass: 'register-input-field',

      // update input fields
      [key.target.id]: key.target.value
    });
  }

  SubmitCredentials(key) {
    key.preventDefault();
    const { email } = this.state;
    const { verifyCurrentUser } = this.props;
    const { emailclass, emptyEmailFields } = validatemptyResetLink(this.state);
    const { emailclas, errorResetLink } = validaterrorRsetLink(this.state);
    if (emptyEmailFields === 'error') {
      this.setState({ emailclass });
    } else if (errorResetLink !== 'Loading...') {
      this.setState({ emailclass: emailclas, result: errorResetLink });
    } else if (errorResetLink === 'Loading...') {
      this.setState({ result: `Request is ${errorResetLink}`, confirm: `Request is ${errorResetLink}` });
      verifyCurrentUser(email);
      this.setState({ fields: false, result: '', confirm: '' });
    } else {
      this.setState({ result: `Please ${String.fromCodePoint(128591)} something wrong occured reload page and try again.` });
    }
  }

  tryAgain(key) {
    key.preventDefault();
    const { match } = this.props;
    console.log('try again function');
    if (match.params.referralLink) {
      window.location.replace(`/register-user-account/${match.params.referralLink}`);
    } else {
      window.location.replace('/register-user-account');
    }
  }

  render() {
    const {
      fields,
      emailclass,
      result,
      email
    } = this.state;

    const {
      verifyData,
      sent,
      registered,
      serverData,
      referUserLoading,
      referUserData
    } = this.props;

    return (
      <div>

        <div className="independent-logo">

          <Logo />

        </div>

        <div className="submit-details">
          <Helmet>
            <style>{'body { background-color: #dadada; }'}</style>
          </Helmet>
          <h3> WELCOME TO VETERINARIAN’S INDUSTRY </h3>

          <div className="success-message register-form-error">
            {registered === false
              ? (
                <div>
                  <p className="server-feedback">{serverData.data.data}</p>
                  <br />
                  <button type="submit" className="reset-link" onClick={(key) => { this.tryAgain(key); }}>  Try again </button>
                </div>
              )
              : referUserLoading === false
                ? (
                  <div>
                    <p className="server-feedback">{referUserData.data}</p>
                    <br />
                    <button type="submit" className="reset-link" onClick={(key) => { this.tryAgain(key); }}>  Try again </button>

                  </div>
                )
                : sent !== null
                  ? (
                    <div>
                      {fields === false
                        ? (
                          <div>
                            {verifyData.data.data
                              ? (
                                <div>
                                  <p className="server-feedback">
                                    {verifyData.data.data}
                                  </p>
                                  <br />
                                  <button type="submit" className="reset-link" onClick={(key) => { this.getCredential(key); }}>  resend link </button>
                                </div>
                              )
                              : (
                                <div>
                                  <p className="server-feedback">
                                    {verifyData.data}
                                  </p>
                                  <br />
                                  <a href="/login-user-account" className="reset-link">  Login now </a>
                                </div>
                              )}
                          </div>
                        ) : (
                          <div className="login-form-container">
                            <br />
                            <p className="reset-description ">Please enter email address you used to create account we will send you a verification link.</p>

                            <div>
                              <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className={`${emailclass} login-input-field`}
                                onChange={(id) => this.handleChange(id)}
                                value={email}
                              />
                            </div>

                            <div className="login-form-error">
                              {result}
                            </div>

                            <div>
                              <button className="login-button" type="submit" onClick={(key) => { this.SubmitCredentials(key); }}> Submit </button>
                            </div>

                          </div>
                        )}
                    </div>
                  )
                  : registered === true
                    ? (
                      <div>
                        {fields === false
                          ? (
                            <div>
                              <p className="server-feedback">{serverData.data.data}</p>
                              <br />
                              <button type="submit" className="reset-link" onClick={(key) => { this.getCredential(key); }}>  resend link </button>
                            </div>
                          ) : (
                            <div className="login-form-container">
                              <br />
                              <p className="reset-description ">Please enter email address you used to create account we will send you a verification link.</p>

                              <div>
                                <input
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                  className={`${emailclass} login-input-field`}
                                  onChange={(id) => this.handleChange(id)}
                                  value={email}
                                />
                              </div>

                              <div className="login-form-error">
                                {result}
                              </div>

                              <div>
                                <button className="login-button" type="submit" onClick={(key) => { this.SubmitCredentials(key); }}> Submit </button>
                              </div>

                            </div>
                          )}
                      </div>
                    )
                    : referUserLoading === true
                      ? (
                        <div>
                          {fields === false
                            ? (
                              <div>
                                <p className="server-feedback">{referUserData.data}</p>
                                <br />
                                <button type="submit" className="reset-link" onClick={(key) => { this.getCredential(key); }}>  resend link </button>
                              </div>
                            ) : (
                              <div className="login-form-container">
                                <br />
                                <p className="reset-description ">Please enter email address you used to create account we will send you a verification link.</p>

                                <div>
                                  <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className={`${emailclass} login-input-field`}
                                    onChange={(id) => this.handleChange(id)}
                                    value={email}
                                  />
                                </div>

                                <div className="login-form-error">
                                  {result}
                                </div>

                                <div>
                                  <button className="login-button" type="submit" onClick={(key) => { this.SubmitCredentials(key); }}> Submit </button>
                                </div>

                              </div>
                            )}
                        </div>
                      )
                      : (
                        <div>
                          {fields === false
                            ? (
                              <div>
                                <p className="server-feedback">Go ahead and verify your account with Pet Industry .</p>
                                <br />
                                <button type="submit" className="reset-link" onClick={(key) => { this.getCredential(key); }}>  Verify account </button>
                              </div>
                            ) : (
                              <div className="login-form-container">
                                <br />
                                <p className="reset-description ">Please enter email address you used to create account we will send you a verification link.</p>

                                <div>
                                  <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className={`${emailclass} login-input-field`}
                                    onChange={(id) => this.handleChange(id)}
                                    value={email}
                                  />
                                </div>

                                <div className="login-form-error">
                                  {result}
                                </div>

                                <div>
                                  <button className="login-button" type="submit" onClick={(key) => { this.SubmitCredentials(key); }}> Submit </button>
                                </div>

                              </div>
                            )}
                        </div>
                      )}
          </div>
        </div>

      </div>
    );
  }
}


RegisterSuccess.defaultProps = {
  referUserLoading: false,
  referUserData: {},
  registered: null,
  sent: null,
  match: {},
  serverData: {},
  verifyData: {},
  verifyCurrentUser: PropTypes.func,
};

RegisterSuccess.propTypes = {
  referUserLoading: PropTypes.bool,
  registered: PropTypes.bool,
  sent: PropTypes.bool,
  match: PropTypes.shape(),
  serverData: PropTypes.shape(),
  verifyData: PropTypes.shape(),
  referUserData: PropTypes.shape(),
  verifyCurrentUser: PropTypes.func,
};


const mapStateToProps = ({ registerInitialState, verifyInitialState, referUserInitialState }) => (
  {
    registered: registerInitialState.registered,
    serverData: registerInitialState.data,
    sent: verifyInitialState.sent,
    verifyData: verifyInitialState.data,

    referUserLoading: referUserInitialState.loading,
    referUserData: referUserInitialState.data
  }
);

const mapDispatchToProps = (dispatch) => ({ verifyCurrentUser: (data) => { dispatch(verifyUser(data)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSuccess);
