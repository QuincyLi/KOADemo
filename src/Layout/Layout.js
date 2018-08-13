import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './Navbar';
import ErrorBoundary from './ErrorBoundary';

class Layout extends Component{
  navbarClick = (args, e) => {
    switch(args){
      case 'ant': this.getActive('http://192.168.10.208:8000',e);break;
      case 'work': this.getActive('http://192.168.10.208:8080',e);break;
    }
  }

  getActive = (args, e) => {
    this.container.src = args;
    for(const sibling of e.target.parentElement.children){
      sibling.className = 'nav-item nav-link';
      if(sibling.id == e.target.id) {
        sibling.className = 'nav-item nav-link active';
      }
    }
  }

  render(){
    return (
      <div className="container">
        <NavBar 
          navbarClick={this.navbarClick}
        />
        <ErrorBoundary>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe ref={(container) => { this.container = container;}} className="embed-responsive-item" src="http://192.168.10.208:8080" allowFullScreen></iframe>
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}

export default Layout;