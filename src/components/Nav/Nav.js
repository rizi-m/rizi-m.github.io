import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Nav.css';

import {
  Link,
  useLocation,
} from "react-router-dom";

const NavLink = ({link, currentLocation}) => {
    const { path, text } = link;
    const isActive = currentLocation === path;
    const className = classNames('nav__link', [
      { 'nav__link--current': isActive },
    ]);

    return <Link className={className} to={path}>{text}</Link>
}

const Nav = ({links}) => {
  const location = useLocation();
  return (
    <nav className="nav">
      <ul>
        {links.map((link) => (
          <li key={link.key}>
            <NavLink link={link} currentLocation={location.pathname}/>
          </li>
        ))}
      </ul>
    </nav>
)};

Nav.propTypes = {
  links: PropTypes.array.isRequired,
};

NavLink.propTypes = {
  link: PropTypes.object.isRequired,
  current: PropTypes.string.isRequired,
};

export default Nav;