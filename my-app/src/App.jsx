import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ErrorPage from "./Pages/ErrorPage";
import HostPage from "./Pages/HostPage";


class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="Hosts/:id" element={<HostPage />} />
          <Route path="Error" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;