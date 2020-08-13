/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

import IconOne from '../../assets/images/CRM Tool.svg';
import IconTwo from '../../assets/images/Appointments.svg';
import IconThree from '../../assets/images/Medical Recorde.svg';
import IconFour from '../../assets/images/Resources.svg';



/**
 * This is Logo class which hold Logo component.
 */
class CombineIcons extends Component {
  iconsActions() {
    setTimeout(() => {
      if (localStorage.getItem('token')) {
        window.location.href = '/unlocking-page';
      } else {
        window.location.href = '/unlocking-page';
      }
    }, 500);
  }

  render() {
    return (
      <div className="icon-container">

        <div className="icons-head">
          <h1 className="icons-title">Unified Solution for Veterinarians</h1>
        </div>

        <div className="combine-icons">

          <div className="icons">
            <a href="/unlocking-page">
              <img src={IconOne} alt="CRM Tool" />
            </a>
            <div className="icons-desc">CRM Tool</div>
          </div>

          <div className="icons">
            <a href="/unlocking-page">
              <img src={IconTwo} alt="appointment" className="large-width" />
            </a>
            <div className="icons-desc">Appointments</div>
          </div>

          <div className="icons">
            <a href="/unlocking-page">
              <img src={IconThree} alt="store" />
            </a>
            <div className="icons-desc">E-Medical Records / PawID</div>
          </div>

          <div className="icons">
            <a href="/unlocking-page">
              <img src={IconFour} alt="Commerce" />
            </a>
            <div className="icons-desc">Resources</div>
          </div>

        </div>
      </div>
    );
  }
}


export default CombineIcons;
