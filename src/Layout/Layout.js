import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './Navbar';
import ErrorBoundary from './ErrorBoundary';

class Layout extends Component{
  navbarClick = (args, e) => {
    switch(args){
      case 'ant': this.getActive('http://localhost:8000',e);break;
      case 'work': this.getActive('http://localhost:8080',e);break;
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

  postMessage = () => {
    const data = {
      token: 'test 123123123123123123'
    }
    this.container.contentWindow.postMessage(data, this.container.src);
  }

  render(){
    return (
      <div className="container">
        <NavBar 
          navbarClick={this.navbarClick}
        />
        <ErrorBoundary>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe ref={(container) => { this.container = container;}} className="embed-responsive-item" src="http://localhost:8080" onLoad={this.postMessage} allowFullScreen></iframe>
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}

export default Layout;