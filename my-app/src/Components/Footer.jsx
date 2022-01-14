import React from "react";

import LogoFooter from "../Media/LogoFooter.svg"

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <img src={LogoFooter} alt="kasa" />
        <p className='copyrights'>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;