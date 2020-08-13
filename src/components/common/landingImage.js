import React, { Component } from 'react';
import PriorityCare from '../../assets/images/1.Priority Care.svg';
import Veterinarian from '../../assets/images/2.Veterinarian Aura.svg';
import right from '../../assets/images/3.Right Treatment.svg';
import pure from '../../assets/images/4.Pure Love.svg';


/**
 * This is LandingImage class which hold Landing Image component.
 */
class LandingImage extends Component {
  render() {
    return (
      <div className="landing-image-view">
        <div className="title">
          <h1>Meet With Qualified Doctors</h1>
        </div>
        <div className="images">

          <div className="single-box-view">
            <div className="img-box">
              <img src={PriorityCare} alt="no-boing" className="image-render" />
            </div>
            <div className="img-text">
              <h3>Priority Care</h3>
              <p> Your Pet at safe hands All lives are equal !.</p>
            </div>
          </div>

          <div className="single-box-view">
            <div className="img-box">
              <img src={Veterinarian} alt="calming" className="image-render" />
            </div>
            <div className="img-text">
              <h3>Veterinarian Aura</h3>
              <p>Doctors understand our loved once’s inside-out.</p>
            </div>
          </div>

          <div className="single-box-view">
            <div className="img-box">
              <img src={right} alt="playing" className="image-render" />
            </div>
            <div className="img-text">
              <h3>Right Treatment</h3>
              <p>Medicines , personalized for our loved once’s.</p>
            </div>
          </div>

          <div className="single-box-view">
            <div className="img-box">
              <img src={pure} alt="treatment" className="image-render" />
            </div>
            <div className="img-text">
              <h3>Pure Love</h3>
              <p>Did you know Veterinarians are the biggest Animal Lovers !!</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default LandingImage;
