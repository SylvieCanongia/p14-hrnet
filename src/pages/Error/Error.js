import React from 'react';
import { Link } from 'react-router-dom';
import "./error.scss";

/**
 * The error Page
 * @module Error
 * @returns { HTMLElement } - HTMLElement
 */
const Error = () => {
  return (
    <div className='error'>
      <h1 className="errorTitle">404</h1>
      <p className="errorText">Whoops ! The page you requested does not exist.</p>
      <Link to='/' className='errorHomeLink'>Return to the home page</Link>
    </div>
  );
};

export default Error;