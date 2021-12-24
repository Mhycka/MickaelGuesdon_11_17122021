import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoFooter from '../Media/LogoFooter.svg'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <section className="footer-container">
                    <Link to="/">
                        <h2 className="footer-logo">
                            <img src={LogoFooter} alt="Kasa Logo" />
                            <span className="sr-only">Kasa</span>
                        </h2>
                    </Link>
                    <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
                </section>
            </footer>
        )
    }
}