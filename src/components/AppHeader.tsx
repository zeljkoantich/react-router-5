import React from 'react';
import AppNavbar from './AppNavbar';
import styled from 'styled-components';

const Header = styled.header`
  background: green;
  margin: 0 auto;

  h1 {
    margin: 0;
  }
`;

const AppHeader = () => (
  <Header>
    <h1> {/* title */}
      {AppHeader.name}
      <br />
      Title: React Router 5
    </h1>
    <AppNavbar />
  </Header>

);

export default AppHeader;
