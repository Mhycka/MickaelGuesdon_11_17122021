import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <div className='wrapper'>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;