import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { resetLink } from '../../actions';
import { validatemptyResetLink, validaterrorRsetLink } from '../../helpers/index';

/**
 * This is ResetLink class which hold Reset Link component.
 */
class ResetLink extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = {
      fields: true,
      emailclass: '',
      email: '',
      result: '',

    };
  }

  handleChange(key) {
    // return to a normal class again
    this.setState({
      emailclass: 'register-input-field',

      // update input fields
      [key.target.id]: key.target.value
    });
  }

  unHideField(key) {
    key.preventDefault();
    this.setState({ fields: true });
  }

  hideFields(key) {
    key.preventDefault();
    this.setState({ fields: false });
  }

  SubmitCredentials(key) {
    key.preventDefault();
    const { email } = this.state;
    const { resetCurrentLink } = this.props;
    const { emailclass, emptyEmailFields } = validatemptyResetLink(this.state);
    const { emailclas, errorResetLink } = validaterrorRsetLink(this.state);
    if (emptyEmailFields === 'error') {
      this.setState({ emailclass });
    } else if (errorResetLink !== 'Loading...') {
      this.setState({ emailclass: emailclas, result: errorResetLink });
    } else if (errorResetLink === 'Loading...') {
      this.setState({ result: `Request is ${errorResetLink}` });
      resetCurrentLink(email);
      this.setState({ fields: false, result: '', confirm: '' });
    } else {
      this.setState({ result: `Please ${String.fromCodePoint(128591)} something wrong occured reload page and try again.` });
    }
  }

  render() {
    const {
      fields,
      emailclass,
      result,
      email
    } = this.state;
    const { sent, serverData } = this.props;

    return (
      <div>
        {
          fields === true
            ? (
              <div>
                {/* Setting background for Login Component */}
                <Helmet>
                  <style>{'body { background-color: #585858; }'}</style>
                </Helmet>


                {/* Login Form Staff */}
                <div className="login-form-container">
                  <div className="step-ones">

                    <h3> RESET PASSWORD </h3>

                    <br />
                    <p className="reset-description ">Please enter your email address we will send you a link to reset your password.</p>

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

                    <div className="login-rigister-section">
                      <a className="login-join-link" href="/login-user-account"> Back to sigin </a>
                    </div>

                  </div>

                </div>
              </div>
            )
            : (
              <div>
                {
                  sent !== null
                    ? (
                      <div>
                        {
                          sent === true
                            ? (
                              <div className="submit-details">
                                <div className="success-message register-form-error">
                                  <Helmet>
                                    <style>{'body { background-color: #dadada; }'}</style>
                                  </Helmet>
                                  <h3> WELCOME TO PET INDUSTRY </h3>
                                  <div>
                                    <p className="server-feedback">{serverData.data.data}</p>
                                    <br />
                                    <button type="submit" className="reset-link" onClick={(key) => { this.unHideField(key); }}>  Resend link </button>
                                  </div>
                                </div>
                              </div>
                            )
                            : (
                              <div className="submit-details">
                                <div className="success-message register-form-error">
                                  <Helmet>
                                    <style>{'body { background-color: #dadada; }'}</style>
                                  </Helmet>
                                  <h3> WELCOME TO PET INDUSTRY </h3>
                                  <div>
                                    <p className="server-feedback">{serverData.data.data}</p>
                                    <br />
                                    <button type="submit" className="reset-link" onClick={(key) => { this.unHideField(key); }}>  Try again </button>
                                  </div>
                                </div>
                              </div>
                            ) // for sent is not equal true
                        }
                      </div>
                    )
                    : (
                      <div>
                        {/* Setting background for Login Component */}
                        <Helmet>
                          <style>{'body { background-color: #585858; }'}</style>
                        </Helmet>


                        {/* Login Form Staff */}
                        <div className="login-form-container">
                          <div className="step-ones">

                            <h3> RESET PASSWORD </h3>

                            <br />
                            <p className="reset-description ">Please enter your email address we will send you a link to reset your password.</p>

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

                            <div className="login-rigister-section">
                              <a className="login-join-link" href="/login-user-account"> Back to sigin </a>
                            </div>

                          </div>

                        </div>
                      </div>
                    ) // for sent is equal null
                }
              </div>
            ) // for first condition where fields is not equal true
        }
      </div>
    );
  }
}


ResetLink.defaultProps = {
  sent: null,
  serverData: {},
  resetCurrentLink: PropTypes.func,
};

ResetLink.propTypes = {
  sent: PropTypes.bool,
  serverData: PropTypes.shape(),
  resetCurrentLink: PropTypes.func,
};

const mapStateToProps = ({ resetLinkInitialState }) => (
  {
    sent: resetLinkInitialState.sent,
    serverData: resetLinkInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => ({ resetCurrentLink: (data) => { dispatch(resetLink(data)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(ResetLink);
