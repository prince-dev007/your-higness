/* eslint-disable react/jsx-props-no-spreading */
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import IconOne from '../../assets/images/CRM Tool.svg';
import IconThree from '../../assets/images/Appointments.svg';
import IconFour from '../../assets/images/Resources.svg';
import IconTwo from '../../assets/images/Medical Recorde.svg';
import Unlockwhite from '../../assets/images/unlockwhite.png';

import SearchDoctor from './searchDoctor';
import Footer from './footer';
import Logo from './logo';

/**
 * This is user unlocking page class which hold user unlocking page component.
 */
class UnlockingPage extends Component {
  registerNow() {
    setTimeout(() => {
      window.location.href = '/register-user-account';
    }, 500);
  }

  SignupNow() {
    setTimeout(() => {
      window.location.href = '/register-user-account';
    }, 500);
  }

  render() {
    return (
      <div className="unlocking-page">
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: #ffff; }'}</style>
        </Helmet>

        <header className="unlocking-page-header">

          <div className="main">

            <Logo />

            <ul>

              {/* <li>
                <a href="/login-user-account" className="url">Login</a>
              </li>
              <span>/</span>
              <li>
                <a href="/register-user-account" className="url">register</a>
              </li> */}

            </ul>

          </div>

          <div className="our-service">
            <h className="home-demand-service">Home Services, On Demand.</h>
          </div>

          <SearchDoctor />

        </header>


        <div className="locking-content">

          <div className="content">

            <h1>CRM Tool</h1>
            <p>
              Our Tool will help all care providers, take out pain points
              while dealing with pet parents, we solve your problem
              with single click using our end-to-end CRM tool built to
              cater your needs.
            </p>

          </div>

          <div className="image">
            <img src={IconOne} alt="Icon" className="image-one" />
          </div>

        </div>

        <div className="unlocked-content">

          <div className="holder">


            <div className="image">
              <img src={IconThree} alt="Icon" />
            </div>

            <div className="content">
              <h1>Appointment</h1>
              <p>
              Get discovered by 10,000+ Pet Parents around your area , wecomplete the circuit.
              </p>

              <button type="button" onClick={() => { this.registerNow(); }}>Register Now</button>
            </div>

          </div>

        </div>

        <div className="locking-content">

          <div className="content">

            <h1 className="opacity">E-Medical Records / PawID</h1>
            <p className="opacity">
              Looking at papers getting out of hand, we have
              integrated a smooth system where you can see your
              patient past records at your finger tips, Just Swipe
              and Read!
            </p>

            <button type="button" className="unlock-button" onClick={() => { this.registerNow(); }}>Signup Now</button>

          </div>

          <div className="image main-opacity">
            <img src={IconTwo} alt="Icon" className="image-three" />
          </div>

        </div>

        <div className="unlocked-content">

          <div className="holder">

            <div className="image main-opacity">
              <img src={IconFour} alt="Icon" />
            </div>

            <div className="content">
              <h1 className="opacity">Resources</h1>
              <p className="opacity">
              Get Exclusive Access to E-Medicine Hand Book, Knowledge
              Sharing Seminars – Veterinarian’s Best Practices , Q & A
              Sessions and More.
              </p>

              <div><img src={Unlockwhite} alt="Icon" /></div>
              <button type="button" className="unlock-button" onClick={() => { this.registerNow(); }}>Unlock Now</button>
            </div>

          </div>

        </div>

        <div className="welcome-page-body">
          <h1>Quick Tips</h1>
          <div className="experience-desc">

            <div className="description">
              Connect with Your Community Pet owners often form strong communities in their local areas.
              Interacting with nearby pet owners will keep your business’ name fresh in potential customers’
              minds, boost your reputation among local animal lovers, and help build loyalty among your current
              clients. Whenever you receive a positive testimonial, share it on your Facebook page so that people
              who are interested in your products or services can find it easily. Be sure to also attend local events,
              and let your fans and followers know you will be there ahead of time. Another great strategy is to connect
              with local influencers and invite them to write a guest post for your blog. Look for well-known individuals.
            </div>

          </div>
        </div>

        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default UnlockingPage;
