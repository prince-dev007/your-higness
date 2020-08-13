/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

import RejectShop from '../../assets/images/rejectShop.png';
import WelcomeLogo from '../../assets/images/AddHomeLogo.png';
/**
 * This is Logo class which hold Logo component.
 */
class RegisterPopup extends Component {
  componentDidMount() {
    const closeBtn = document.querySelector('.close-icon');
    const addBtn = document.querySelector('.get-start-btn');
    const prompWindow = document.querySelector('.register-popup');

    let x = 0;
    let displayTime;
    prompWindow.style.display = 'block';

    function Visible() {
      if (x === 1) clearInterval(displayTime);
      x += 0.01;
      prompWindow.style.opacity = x;
      prompWindow.style.filter = `alpha(opacity=${x * 100})`;
    }

    displayTime = setInterval(Visible, 25);

    setTimeout(() => {
      prompWindow.style.display = 'none';
    }, 10000);

    addBtn.addEventListener('click', () => {
      window.location.href = '/register-services-account';
    });

    const hideAddHomeWindow = () => {
      prompWindow.style.display = 'none';
    };

    closeBtn.addEventListener('click', () => { hideAddHomeWindow(); });
  }

  render() {
    return (

      <div className="register-popup">

        <div className="content">

          <div className="header">
            <h2>Take Tour With Rivopets</h2>
            <img src={RejectShop} alt="close" className="close-icon" />
          </div>

          <div className="body">
            <img src={WelcomeLogo} alt="close" className="logo-icon" />
            <p>Register And Go Live Now !!</p>
          </div>

          <div className="line" />

          <div htmlFor="click" className="add-btn">
            <button type="submit" className="get-start-btn">Get Start</button>
          </div>

        </div>

      </div>


    );
  }
}


export default RegisterPopup;
