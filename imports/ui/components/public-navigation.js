import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const PublicNavigation = () => (
  <div>
    <Nav>
      <LinkContainer to="albums">
        <NavItem eventKey={ 1 } href="/albums">Albums</NavItem>
      </LinkContainer>
      <LinkContainer to="search">
        <NavItem eventKey={ 2 } href="/search">Search</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="signup">
        <NavItem eventKey={ 3 } href="/signup">Sign Up</NavItem>
      </LinkContainer>
      <LinkContainer to="login">
        <NavItem eventKey={ 4 } href="/login">Log In</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);
