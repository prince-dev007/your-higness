import React, { Component } from 'react';
import profile from '../../assets/images/profile.png';

/**
 * This is Menu class which hold Menu component.
 */
class Menu extends Component {
  render() {
    return (
      <div>

        <div className="side-menu">
          <div className="profile-detail">
            <img src={profile} alt="profile" className="profile" />
            <div className="username"> User Name </div>
          </div>

          <a href="/">Book My Appointments</a>
          <a href="/">My Records</a>
          <a href="/">My Orders</a>
          <br />
          <a href="/">Doctor</a>
          <a href="/">Pharmacy</a>
          <a href="/">Shop</a>
          <br />
          <a href="/">Contact us</a>
          <a href="/">Health Articles</a>
          <a href="/">Terms and Conditions</a>
          <br />
          <a href="/">Help</a>
          <a href="/">Setting</a>
          <a href="/">logout</a>
        </div>

      </div>
    );
  }
}

export default Menu;
