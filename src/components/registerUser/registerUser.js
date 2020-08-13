/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* Users Regisiter component */

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Logo from '../common/logo';
// import SocialAuth from '../social/socialAuth';
import {
  registerUser,
  referUser,
  checkReferralLink
} from '../../actions';

import {
  validatemptyRegisterFieldsOneRegistry,
  validatemptyRegisterFieldsTwoRegistry,
  validaterrorRegisterFieldsOneRegistry,
  validaterrorRegisterFieldsTwoRegistry
} from '../../helpers/index';


/**
 * This is RegisterUser class which hold Register user component.
 */
class RegisterUser extends Component {
  /* Srate Staff */

  constructor() {
    super();
    this.state = {
      firstnameclass: '',
      lastnameclass: '',
      emailclass: '',
      phoneclass: '',
      passwordclass: '',
      confirmpasswordclass: '',
      loadingclass: '',
      isFormOneShown: false,
      confirm: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '+91',
      password: '',
      confirmpassword: ''

    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  componentDidMount() {
    const { checkCurrentReferralLink, match } = this.props;
    if (match.params.referralLink) {
      if (match.params.referralLink.length <= 2) {
        window.location.replace('/register-user-account');
      } else {
        checkCurrentReferralLink(match.params.referralLink);
      }
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      this.setState({ confirm: 'Failed to detect address, Please check connection.' });
      window.alert('Geolocation is not supported by this browser.');
    }
  }

  getCoordinates(position) {
    Geocode.setApiKey('AIzaSyAI38nI4lmagfKGwHYVRyjJm8420-nJ_aw');
    Geocode.setLanguage('en');
    Geocode.setRegion('es');
    Geocode.enableDebug();
    this.setState({ addressname: `${position.coords.latitude} and ${position.coords.longitude}` });
    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  unHideFormOne() {
    this.setState({ isFormOneShown: true });
  }

  hideFormOne() {
    this.setState({ isFormOneShown: false });
  }

  confirmInformations(key) {
    key.preventDefault();
    const { confirm } = this.state;
    const { firstnameclass, lastnameclass, emailclass, phoneclass, emptyRegiserFieldsOneRegistry } = validatemptyRegisterFieldsOneRegistry(this.state);
    const { firstnameclas, lastnameclas, emailclas, phoneclas, errorRegisterFieldsOneRegistry, phone } = validaterrorRegisterFieldsOneRegistry(this.state);
    if (emptyRegiserFieldsOneRegistry === 'error') {
      this.setState({ firstnameclass, lastnameclass, emailclass, phoneclass });
    } else if (errorRegisterFieldsOneRegistry !== 'Loading...') {
      this.setState({ confirm: errorRegisterFieldsOneRegistry });
      this.setState({ firstnameclass: firstnameclas, lastnameclass: lastnameclas, emailclass: emailclas, phoneclass: phoneclas, confirm: errorRegisterFieldsOneRegistry });
    } else if (errorRegisterFieldsOneRegistry === 'Loading...') {
      this.setState({ confirm: `Please ${String.fromCodePoint(128591)} check all informations  are correct before proceed.`, phone });
      if (confirm) {
        this.setState({ confirm: '' });
        this.unHideFormOne();
      }
    } else {
      this.hideFormOne();
      this.setState({ confirm: `Please ${String.fromCodePoint(128591)} something wrong occured reload page and try again.` });
    }
  }

  SubmitCredentials(key) {
    key.preventDefault();
    const { registerCurrentUser, referCurrentUser, match } = this.props;
    const { passwordclas, confirmpasswordclas, errorRegisterFieldsTwoRegistry } = validaterrorRegisterFieldsTwoRegistry(this.state);
    const { passwordclass, confirmpasswordclass, emptyRegiserFieldsTwoRegistry } = validatemptyRegisterFieldsTwoRegistry(this.state);
    if (emptyRegiserFieldsTwoRegistry === 'error') {
      this.setState({ passwordclass, confirmpasswordclass });
    } else if (errorRegisterFieldsTwoRegistry !== 'Loading...') {
      this.setState({ passwordclass: passwordclas, confirmpasswordclass: confirmpasswordclas, confirm: errorRegisterFieldsTwoRegistry });
    } else if (errorRegisterFieldsTwoRegistry === 'Loading...') {
      this.unHideFormOne();
      this.setState({ confirm: `Request ${errorRegisterFieldsTwoRegistry}` });
      if (match.params.referralLink) {
        referCurrentUser(this.state, match.params.referralLink);
      } else {
        registerCurrentUser(this.state);
      }
    } else {
      this.hideFormOne();
      this.setState({ confirm: `Please ${String.fromCodePoint(128591)} something wrong occured reload page and try again.` });
    }
  }

  handleChange(key) {
    // return to a normal class again and update input field state
    this.setState({
      firstnameclass: '',
      lastnameclass: '',
      emailclass: '',
      phoneclass: '',
      passwordclass: '',
      confirmpasswordclass: '',
      confirm: null,
      [key.target.id]: key.target.value
    });

    if (key.target.files) {
      this.setState({ [key.target.id]: key.target.files[0] });
    }
  }

  render() {
    /* Destructuring State's properties here */
    const {
      firstnameclass,
      lastnameclass,
      emailclass,
      phoneclass,
      passwordclass,
      confirmpasswordclass,
      loadingclass,
      isFormOneShown,
      confirm,
      firstname,
      lastname,
      email,
      phone,
      password,
      confirmpassword
    } = this.state;

    const {
      history,
      match,
      registered,
      referUserLoading,
      checkReferralLinkLoading
    } = this.props;

    if (checkReferralLinkLoading === false) {
      window.location.replace('/register-user-account');
    }

    if (registered !== null) {
      history.push('/register-user-response');
    }

    if (referUserLoading !== null) {
      if (match.params.referralLink) {
        history.push(`/register-user-response/${match.params.referralLink}`);
      }
    }

    return (
      <div>
        {/* Setting background for user register Component */}
        <Helmet>
          <style>{'body { background-color: #585858; }'}</style>
        </Helmet>

        {
          isFormOneShown
            ? (
              <div>
                {/* Register Form Two Staff */}

                <div className="independent-logo">

                  <Logo />

                </div>

                <div className="register-form-container">

                  <div className="step-one">
                    <h3> VETERINARIAN’S REGISTRATION </h3>

                    <div>
                      <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className={`${passwordclass} register-input-field`}
                        onChange={(id) => this.handleChange(id)}
                        value={password}
                      />
                    </div>

                    <div>
                      <input
                        id="confirmpassword"
                        type="password"
                        placeholder="Confirm Password"
                        className={`${confirmpasswordclass} register-input-field`}
                        onChange={(id) => this.handleChange(id)}
                        value={confirmpassword}
                      />
                    </div>


                    <label className="register-check-field">
                      Receive relevant
                      <span>offers</span>
                    and
                      <span>promotional</span>
                    from Pet
                      <input type="checkbox" value="true" />
                      <span className="register-check-tick" />
                    </label>

                    <div className="register-form-error">
                      {confirm}
                    </div>

                    <div>
                      <button className="register-button" type="submit" onClick={(key) => { this.SubmitCredentials(key); }}> Regisiter Now </button>
                    </div>

                  </div>

                </div>

              </div>
            )
            : (
              <div>

                <div className="independent-logo">

                  <Logo />

                </div>

                <div className="options-bar">

                  <span className="options register">
                    <a className="login-links " href="/login-user-account"> Login </a>
                  </span>

                  <span className="option">
                    <span className="register-links "> Register </span>
                  </span>

                </div>
                <div className="divider-option-bar" />
                {/* Register Form One Staff */}
                <div className="register-form-container step-one">

                  <h3> VETERINARIAN’S REGISTRATION </h3>

                  {/* <SocialAuth /> */}

                  <div>
                    <input
                      id="firstname"
                      type="name"
                      placeholder="First Name"
                      className={`${firstnameclass} register-input-field`}
                      onChange={(id) => this.handleChange(id)}
                      value={firstname}
                    />
                  </div>

                  <div>
                    <input
                      id="lastname"
                      type="name"
                      placeholder="Last Name"
                      className={`${lastnameclass} register-input-field`}
                      onChange={(id) => this.handleChange(id)}
                      value={lastname}
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className={`${emailclass} register-input-field`}
                      onChange={(id) => this.handleChange(id)}
                      value={email}
                    />
                  </div>

                  <div>
                    <input
                      id="phone"
                      type="phone"
                      maxLength="13"
                      minLength="13"
                      placeholder="Mobile Phone"
                      className={`${phoneclass} register-input-field`}
                      onChange={(id) => this.handleChange(id)}
                      value={phone}
                    />
                  </div>

                  <div className={`${loadingclass} register-form-error`}>
                    {confirm}
                  </div>

                  <div>
                    <button className="register-button" type="submit" onClick={(key) => { this.confirmInformations(key); }}> Proceed </button>
                  </div>

                </div>

              </div>
            )
        }

      </div>
    );
  }
}

RegisterUser.defaultProps = {
  registered: null,
  referUserLoading: false,
  checkReferralLinkLoading: false,
  history: {},
  match: {},
  referCurrentUser: PropTypes.func,
  registerCurrentUser: PropTypes.func,
  checkCurrentReferralLink: PropTypes.func,
};

RegisterUser.propTypes = {
  registered: PropTypes.bool,
  referUserLoading: PropTypes.bool,
  checkReferralLinkLoading: PropTypes.bool,
  history: PropTypes.shape(),
  match: PropTypes.shape(),
  referCurrentUser: PropTypes.func,
  registerCurrentUser: PropTypes.func,
  checkCurrentReferralLink: PropTypes.func,
};


const mapStateToProps = ({ registerInitialState, referUserInitialState, checkReferralLinkInitialState }) => (
  {
    registered: registerInitialState.registered,

    referUserLoading: referUserInitialState.loading,

    checkReferralLinkLoading: checkReferralLinkInitialState.loading,

  }
);

const mapDispatchToProps = (dispatch) => (
  {
    registerCurrentUser: (data) => {
      dispatch(registerUser(data));
    },

    referCurrentUser: (data, referralLink) => {
      dispatch(referUser(data, referralLink));
    },

    checkCurrentReferralLink: (referralLink) => {
      dispatch(checkReferralLink(referralLink));
    },

  });
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
