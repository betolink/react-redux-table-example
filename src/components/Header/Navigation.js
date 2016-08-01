import React from 'react';
import { Link } from 'react-router';
import './Navigation.styl';

export default () => {
  return (
    <nav role='navigation'>
      <ul>
        <li>
          <Link to='/nutrients/acerola'>Nutrients: Acerola</Link>
        </li>
        <li>
          <Link to='/nutrients/stew'>Nutrients: Stew</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
