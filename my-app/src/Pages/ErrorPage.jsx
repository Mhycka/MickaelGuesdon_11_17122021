import React from "react";

import { Link } from "react-router-dom";


class ErrorPage extends React.Component {
  render() {
    return (
      <div className='notFound'>
        <p className='errorCode'>404</p>
        <p className='errorMessage'>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className='link'>
          Retourner sur la page d’accueil
        </Link>
      </div>
    );
  }
}

export default ErrorPage;