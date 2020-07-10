import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export enum AppRoutes {
  home = '/',
  about = '/about',
  topics = '/topics',
  topicId = '/topics/:topicId',
}

const Navbar = styled.nav`
  background: blue;

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 2vh;
    color: white;
  }

  li > a {
    color: white;
  }
`;

const AppNavbar = () => (
  <Navbar>
    <ul>
      <li><Link to={AppRoutes.home}>Home</Link></li>
      <li><Link to={AppRoutes.about}>About</Link></li>
      <li><Link to={AppRoutes.topics}>Topics</Link></li>
    </ul>
  </Navbar>
);

export default AppNavbar;
