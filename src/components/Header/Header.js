import React from 'react';
import './Header.styl';
import { IndexLink } from 'react-router';
import Navigation from './Navigation';

export default () => {
  return (
    <header>
      <strong>
        <IndexLink to='/'> CMRMediator UI </IndexLink>
      </strong>
      <Navigation />
    </header>
  );
};
