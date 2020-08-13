/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

import RejectShop from '../../assets/images/rejectShop.png';
import WelcomeLogo from '../../assets/images/AddHomeLogo.png';
/**
 * This is Logo class which hold Logo component.
 */
class AddHomeScreen extends Component {
  componentDidMount() {
    let deferredPrompt;
    const closeBtn = document.querySelector('.close-icon');
    const addBtn = document.querySelector('.add-home-btn');
    const prompWindow = document.querySelector('.add-home-window');

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();

      // Stash the event so it can be triggered later.
      deferredPrompt = e;

      // Update UI notify the user they can install the PWA

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
    });

    addBtn.addEventListener('click', () => {
      // Hide the app provided install promotion
      prompWindow.style.display = 'none';

      // Show the install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    });


    const hideAddHomeWindow = () => {
      prompWindow.style.display = 'none';
    };


    closeBtn.addEventListener('click', () => { hideAddHomeWindow(); });
  }

  render() {
    return (

      <div className="add-home-window">

        <div className="content">

          <div className="header">
            <h2>Add Me To Home Screen</h2>
            <img src={RejectShop} alt="close" className="close-icon" />
          </div>

          <div className="body">
            <img src={WelcomeLogo} alt="close" className="logo-icon" />
            <p>Add this application is compatible with your device</p>
          </div>

          <div className="line" />

          <div htmlFor="click" className="add-btn">
            <button type="submit" className="add-home-btn">Add Me</button>
          </div>

        </div>

      </div>


    );
  }
}


export default AddHomeScreen;
