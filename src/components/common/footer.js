import React, { Component } from 'react';
import Instagram from '../../assets/images/instagram.png';
import LinkendIn from '../../assets/images/linkendIn.png';
import Pinterest from '../../assets/images/pinterest.png';
import Youtube from '../../assets/images/youtube.png';


/**
 * This is Footer class which will handle footer.
 */
class Footer extends Component {
  render() {
    return (
      <div className="footer">

        <div className="footer-inner">

          <div className="footer-question">

            <h2 className="footer-head">WHY Rivopets for Veterinarians</h2>
            <div className="footer-head-border" />

            <p>
              Connecting to Pet Parents is not always
              easy , but with Rivopets you will get to
              Connect with more than 10,000+ nearby pet parents
              looking for certified care providers.
            </p>

            <br />

            <div className="footer-btn">
              <a href="/register-user-account" className="url">Get Started</a>
            </div>

          </div>

          <div className="footer-items">

            <div className="footer-item-zero">

              <h2 className="footer-head">Quick Links</h2>
              <div className="footer-head-border" />
              <div className="footer-links">
                <a href="/"><li>About</li></a>
                <br />
                <a href="/unlocking-page"><li>Services</li></a>
              </div>

            </div>

            <div className="footer-item-one">

              <h2 className="footer-head">Pet Parents</h2>
              <div className="footer-head-border" />
              <div className="footer-links">
                <a href="/user-book-page"><li>Search doctor</li></a>
              </div>

            </div>

            <div className="footer-item-two">

              <h2 className="footer-head">Veterinarians</h2>
              <div className="footer-head-border" />
              <div className="footer-links">
                <a href="/register-user-account"><li>Register</li></a>
              </div>

            </div>

            <div className="footer-item-three">

              <h2 className="footer-head">Follow Us</h2>
              <div className="footer-head-border" />
              <div className="footer-links footer-Social-logo">

                <a href="https://www.instagram.com/rivopets/" target="_blank" rel="noopener noreferrer">
                  <li>
                    <img src={Instagram} alt="instagram" />
                  Instagram
                  </li>
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="footer-border" />

        <div className="footer-copy-right">

          <div>

            <div><h5>Stay touch on social networks</h5></div>

            <a href="/">
              <img src={Youtube} alt="youtube" />
            </a>

            <a href="/">
              <img src={LinkendIn} alt="linkendIn" />
            </a>

            <a href="/">
              <img src={Pinterest} alt="pinterest" />
            </a>

          </div>

          <p>Rivo Pets BETA©2020. All rights reserved.</p>

        </div>

      </div>
    );
  }
}

export default Footer;
