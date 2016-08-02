import React from 'react';
import { Link } from 'react-router';
import './Navigation.styl';

export default () => {
  return (
    <nav role='navigation'>
      <ul>
        <li>
          <Link to='/status'>STATUS</Link>
        </li>
        <li>
          <Link to='/logs'>LOGS</Link>
        </li>
        <li>
          <Link to='/provider/NSIDCV0TST'>NSIDC V0 UAT</Link>
        </li>
        <li>
          <Link to='/provider/NSIDCV0'>NSIDC V0 PROD</Link>
        </li>
        <li>
          <Link to='/provider/NSIDC_TS1'>ECS UAT</Link>
        </li>
        <li>
          <Link to='/provider/NSIDC_ECS'>ECS PROD</Link>
        </li>
      </ul>
    </nav>
  );
};
