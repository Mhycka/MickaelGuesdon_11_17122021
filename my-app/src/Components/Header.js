import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoHeader from '../Media/LogoHeader.svg'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="header-nav">
                    <div className="header-logo">
                        <Link to="/">
                            <img src={LogoHeader} alt="Kasa Logo" />
                        </Link>
                    </div>
                    <ul className="header-menu">
                        <NavLink to="/">
                            <li className="header-menu-link">Accueil</li>
                        </NavLink>
                        <NavLink to="/about-us">
                            <li className="header-menu-link">A Propos</li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
        )
    }
}