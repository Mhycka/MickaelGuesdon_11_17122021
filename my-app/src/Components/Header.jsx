import React from "react";
import Utilities from "../Utils/Utilities";
import { NavLink, Link } from "react-router-dom";

import LogoHeader from "../Media/LogoHeader.svg";

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <h1>
          <Link to="/"><img src={LogoHeader} alt="kasa" /></Link>
        </h1>
        <nav>
          <ul className='navigationMenu'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  Utilities('navigationLink', { 'active': isActive })}>Accueil</NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  Utilities('navigationLink', { 'active': isActive })}>A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;