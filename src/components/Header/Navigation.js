import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default () => {
  return (
    <Navbar>
      <Nav bsStyle='tabs' pullRight fixedTop>
        <NavItem componentClass={Link} href='/status' to='/status'>
          STATUS
        </NavItem>
        <NavItem componentClass={Link} href='/logs' to='/logs'>
          LOGS
        </NavItem>
        <NavItem componentClass={Link} href='/provider/NSIDCV0TST' to='/provider/NSIDCV0TST'>
          V0 UAT
        </NavItem>
        <NavItem componentClass={Link} href='/provider/NSIDCV0' to='/provider/NSIDCV0'>
          V0 PROD
        </NavItem>
        <NavItem componentClass={Link} href='/provider/NSIDC_TS1' to='/provider/NSIDC_TS1'>
          ECS UAT
        </NavItem>
        <NavItem componentClass={Link} href='/provider/NSIDC_ECS' to='/provider/NSIDC_ECS'>
          ECS PROD
        </NavItem>
      </Nav>
    </Navbar>
  );
};
