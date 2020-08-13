/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import WelcomeLogo from '../../assets/images/WelcomeLogo.png';


/**
 * This is Logo class which hold Logo component.
 */
class OfflineComponent extends Component {
  componentDidMount() {
    let x = 0;
    let displayTime;
    const prompWindow = document.querySelector('.title');


    prompWindow.style.display = 'block';

    function Visible() {
      if (x === 1) clearInterval(displayTime);
      x += 0.005;
      prompWindow.style.opacity = x;
      prompWindow.style.filter = `alpha(opacity=${x * 100})`;
    }

    displayTime = setInterval(Visible, 25);
  }

  render() {
    return (
      <div className="error-connection">

        <div className="title">

          <img src={WelcomeLogo} alt="logo" />
          <h1>Please check internet connection</h1>

        </div>

      </div>
    );
  }
}


export default OfflineComponent;
