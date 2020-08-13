import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { resetPassword } from '../../actions';
import { validaterrorLoginFields, validatemptyLoginFields } from '../../helpers/index';

/**
 * This is ResetPassword class which hold Reset Password component.
 */
class ResetPassword extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = {
      fields: true,
      passwordclass: '',
      emailclass: '',
      credential: '',
      password: '',
      result: '',

    };
  }

  handleChange(key) {
    // return to a normal class again
    this.setState({
      emailclass: 'register-input-field',
      passwordclass: 'register-select-field',
      [key.target.id]: key.target.value
    });
  }

  unHideField(key) {
    key.preventDefault();
    this.setState({ fields: true });
  }

  SubmitCredentials(key) {
    key.preventDefault();
    const { resetCurrentPassword, match } = this.props;
    const { emailclas, passwordclas, errorLoginFields } = validaterrorLoginFields(this.state);
    const { emptyLoginFields, emailclass, passwordclass } = validatemptyLoginFields(this.state);
    if (emptyLoginFields === 'error') {
      this.setState({ emailclass, passwordclass });
    } else if (errorLoginFields !== 'Loading...') {
      this.setState({ emailclass: emailclas, passwordclass: passwordclas, result: errorLoginFields });
    } else if (emptyLoginFields === 'Loading...' && errorLoginFields === 'Loading...') {
      this.setState({ result: `Request is ${errorLoginFields}` });
      resetCurrentPassword(this.state, match.params.token);
      this.setState({ fields: false, result: '' });
    } else { this.setState({ result: `Please ${String.fromCodePoint(128591)} something wrong occured reload page and try again.` }); }
  }

  render() {
    const {
      fields,
      passwordclass,
      emailclass,
      credential,
      password,
      result
    } = this.state;
    const { reseted, serverData } = this.props;

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
                    <div>
                      <input
                        type="text"
                        id="credential"
                        className={`${emailclass} login-input-field`}
                        placeholder="Mobile Number / Email ID"
                        onChange={(id) => this.handleChange(id)}
                        value={credential}
                      />
                    </div>

                    <div>
                      <input
                        id="password"
                        type="password"
                        placeholder="New password"
                        className={`${passwordclass} login-input-field`}
                        onChange={(id) => this.handleChange(id)}
                        value={password}
                      />
                    </div>

                    <div className="login-form-error">
                      {result}
                    </div>

                    <div>
                      <button className="login-button" type="submit" onClick={(key) => { this.SubmitCredentials(key); }}> Rest Password </button>
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
                  reseted === true
                    ? (
                      <div className="submit-details">
                        <div className="success-message register-form-error">
                          <Helmet>
                            <style>{'body { background-color: #dadada; }'}</style>
                          </Helmet>
                          <h3> WELCOME TO PET INDUSTRY </h3>
                          <div>
                            <p className="server-feedback">{serverData.data}</p>
                            <br />
                            <a href="/login-user-account" className="reset-link"> Login now </a>
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
                            <p className="server-feedback">{serverData.data}</p>
                            <br />
                            <button type="submit" className="reset-link" onClick={(key) => { this.unHideField(key); }}>  Try again </button>
                          </div>
                        </div>
                      </div>
                    ) // for sent is not equal true
                }
              </div>
            ) // for first condition where fields is not equal true
        }

      </div>
    );
  }
}


ResetPassword.defaultProps = {
  reseted: null,
  match: {},
  serverData: {},
  resetCurrentPassword: PropTypes.func,
};

ResetPassword.propTypes = {
  reseted: PropTypes.bool,
  match: PropTypes.shape(),
  serverData: PropTypes.shape(),
  resetCurrentPassword: PropTypes.func,
};

const mapStateToProps = ({ resetPasswordInitialState }) => (
  {
    reseted: resetPasswordInitialState.reseted,
    serverData: resetPasswordInitialState.data,
  }
);

const mapDispatchToProps = (dispatch) => ({ resetCurrentPassword: (data, token) => { dispatch(resetPassword(data, token)); }, });

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
