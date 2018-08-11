import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './Navbar';
import ErrorBoundary from './ErrorBoundary';

class Layout extends Component{
  render(){
    return (
      <div className="container">
        <NavBar />
        <ErrorBoundary>
          <div className="row">
            <div className="col-md-12">
              <iframe />
            </div>
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}

export default Layout;