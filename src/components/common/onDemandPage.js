/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import ForwardIcon from '../../assets/images/forwardIcon.png';
import IconOne from '../../assets/images/ptesCommerces.png';
import Rejectmark from '../../assets/images/rejectShop.png';
import ShopIcon from '../../assets/images/shopIcon.png';


import SearchDoctor from './searchDoctor';
import Footer from './footer';
import Logo from './logo';

/**
 * This is user unlocking page class which hold user unlocking page component.
 */
class DemandPage extends Component {
  constructor() {
    super();
    this.state = { showPanel: false, showAction: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showPanel: true });
    }, 3000);
  }

  popupAction(key) {
    key.preventDefault();
    this.setState({ showAction: true, showPanel: false });
  }

  unpopupAction(key) {
    key.preventDefault();
    this.setState({ showAction: false, showPanel: true });
  }

  render() {
    const { showPanel, showAction } = this.state;
    return (
      <div className="onDemand-page">
        {/* Setting background for Login Component */}
        <Helmet>
          <style>{'body { background-color: #ffff; }'}</style>
        </Helmet>

        <header className="onDemand-page-header">

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

        <h1 className="demand-head">On Demand</h1>

        <div className="demand-content">

          <div className="content">
            <h1>On Demand Service</h1>
            <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
                sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                Quisque sit amet est et sapien ullamcorper pharetra.
            </p>
          </div>

          {
              showPanel === true
                ? (
                  <div className="popup-panel">

                    <h3>What are you looking for ?</h3>

                    <div onClick={(key) => { this.popupAction(key); }}>
                      <div className="head">Option One</div>
                      <img src={ForwardIcon} alt="icon" className="image" />
                      <div className="desc"> Connect with qualified Doctors</div>
                      <div className="border" />
                    </div>

                    <div onClick={(key) => { this.popupAction(key); }}>
                      <div className="head">Option Two</div>
                      <img src={ForwardIcon} alt="icon" className="image" />
                      <div className="desc"> Connect with qualified Doctors</div>
                      <div className="border" />
                    </div>

                    <div onClick={(key) => { this.popupAction(key); }}>
                      <div className="head">Option Three</div>
                      <img src={ForwardIcon} alt="icon" className="image" />
                      <div className="desc"> Connect with qualified Doctors</div>
                    </div>

                  </div>
                )

                : null
          }


          {
              showAction === true
                ? (
                  <div className="popup">

                    <img src={Rejectmark} alt="icon" className="close-icon" onClick={(key) => { this.unpopupAction(key); }} />

                    <div className="popup-action">

                      <div className="head">Choose Service</div>

                      <div className="border" />

                      <div>
                        <button type="button">
                          <img src={ShopIcon} alt="icon" />
                          {' '}
                        Lite Checkup - INR 300 (1-5)
                        </button>
                      </div>

                      <div>
                        <button type="button">
                          <img src={ShopIcon} alt="icon" />
                          {' '}
                        Lite Checkup - INR 500 (5-10)
                        </button>
                      </div>

                      <div>
                        <button type="button">
                          <img src={ShopIcon} alt="icon" />
                          {' '}
                        Lite Checkup - INR 700 (10 +)
                        </button>
                      </div>

                    </div>

                  </div>
                )
                : null
          }

          <div className="image">
            <img src={IconOne} alt="Icon" className="image-one" />
          </div>

        </div>

        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default DemandPage;
