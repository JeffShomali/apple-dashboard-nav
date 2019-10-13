import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import City from '../pages/City';

import constants from '../common/constants/cities.json';

const AppRouter = () => {
  const { cities } = constants;
  return (
    <div className='container'>
      <NavBar />
      <Route
        exact
        path='/'
        render={() => <City city='Cupertino' tz='America/Los_Angeles' />}
      />
      {cities.map((city, index) => (
        <Route
          key={index}
          exact
          path={`/${city.section}`}
          render={() => <City city={city.label} tz={city.tz} />}
        />
      ))}
    </div>
  );
};

export default AppRouter;
