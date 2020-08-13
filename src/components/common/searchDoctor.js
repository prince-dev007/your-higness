import React, { Component } from 'react';

/**
 * This is Footer class which will handle footer.
 */
class SearchDoctor extends Component {
  /* Srate Staff */
  constructor() {
    super();
    this.state = { searchDoctor: '', searchDoctorClass: '' };
  }

  SearchInput() {
    const { searchDoctor } = this.state;

    if (searchDoctor.length === 0) {
      this.setState({ searchDoctorClass: 'searchDoctorClass' });
    } else {
      setTimeout(() => {
        window.open('/user-book-page');
      }, 500);
    }
  }

  handleChange(key) {
    // return to a normal class again and update input field state
    this.setState({

      searchDoctor: '',
      searchDoctorClass: '',
      [key.target.id]: key.target.value
    });
  }

  render() {
    const { searchDoctor, searchDoctorClass } = this.state;
    return (

      <div className="main-search">

        <div className="desktop-search">

          <div className="locations-elements">

            <input
              type="text"
              className={`${searchDoctorClass}`}
              placeholder="Search for Doctor, Clinic and Hospital"


              id="searchDoctor"
              value={searchDoctor}
              onChange={(id) => this.handleChange(id)}
            />

            <button
              type="button"
              className="location-btn"
              onClick={(key) => { this.SearchInput(key); }}
            >
            Search
            </button>


          </div>

        </div>

        <div className="phone-search">

          <div className="locations-elements">

            <input
              type="text"
              className={`${searchDoctorClass}`}
              placeholder="Search for Doctor, Clinic and Hospital"


              id="searchDoctor"
              value={searchDoctor}
              onChange={(id) => this.handleChange(id)}
            />

            <button
              type="button"
              className="location-btn"
              onClick={(key) => { this.SearchInput(key); }}
            >
              Search
            </button>

          </div>

        </div>

      </div>

    );
  }
}

export default SearchDoctor;
