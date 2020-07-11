import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AppRoutes } from '../App';

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
      <li>
        <NavLink
          activeStyle={{color:'red'}}
          exact={true}
          to={AppRoutes.home}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{color:'red'}}
          to={AppRoutes.about}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{color:'red'}}
          to={AppRoutes.topics}
        >
          Topics
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{color:'red'}}
          to={AppRoutes.queryStrings}
        >
          Query Strings
        </NavLink>
      </li>
    </ul>
  </Navbar>
);

export default AppNavbar;
