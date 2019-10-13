import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import constants from '../common/constants/cities.json';

class NavBar extends Component {
  state = {
    citySelected: 0
  };

  handleSelect = index => { this.setState({ citySelected: index})

  }
  render() {
    const { citySelected } = this.state;
    return (
      <Fragment>
        <div className='nav-container'>
          {constants.cities.map((city, index) => (
            <Link to={`/${city.section}`}>
              <div
                onClick={() => this.handleSelect(index)}
                className={
                  citySelected === index ? 'nav-button-selected' : 'nav-button'
                }
              >
                <h3 style={{ textAlign: 'center', fontWeight: 300 }}>
                  {city.label}
                </h3>
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    position: "relative",
                    bottom: -1,
                    backgroundColor: citySelected === index ? "black" : "unset",
                    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#bbbbbb'
          }}
        />
      </Fragment>
    );
  }
}

export default NavBar;
