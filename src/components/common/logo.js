/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import WelcomeLogo from '../../assets/images/Final Logo.svg';


/**
 * This is Logo class which hold Logo component.
 */
class Logo extends Component {
  home() {
    setTimeout(() => {
      if (localStorage.getItem('token')) {
        window.location.href = '/user-welcome-dashboard';
      } else {
        window.location.href = '/';
      }
    }, 500);
  }

  render() {
    return (
      <div className="independent-logo">

        <div className="logo" onClick={(key) => { this.home(key); }}>
          <img src={WelcomeLogo} alt="logo" />
        </div>

      </div>
    );
  }
}


export default Logo;
