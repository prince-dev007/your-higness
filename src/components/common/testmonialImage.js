import React, { Component } from 'react';
import TestmonialUserOne from '../../assets/images/testmonialUserOne.jpg';
import TestmonialUserTwo from '../../assets/images/testmonialUserTwo.jpg';
import TestmonialUserThree from '../../assets/images/testmonialUserThree.jpg';


/**
 * This is TestmonialImage class which hold TestmonialImage Image component.
 */
class TestmonialImage extends Component {
  render() {
    return (
      <div className="testmonial-image-view">
        <div className="title">
          <h1>Users Testmonials</h1>
        </div>
        <div className="images">

          <div className="single-box-view">
            <div className="img-box">
              <img src={TestmonialUserOne} alt="TestmonialUserOne" className="image-render" />
            </div>
          </div>
          <div className="single-box-view">
            <div className="img-box">
              <img src={TestmonialUserTwo} alt="TestmonialUserTwo" className="image-render" />
            </div>
          </div>
          <div className="single-box-view">
            <div className="img-box">
              <img src={TestmonialUserThree} alt="TestmonialUserThree" className="image-render" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default TestmonialImage;
