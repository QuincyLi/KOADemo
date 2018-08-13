import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" style={{ cursor: 'pointer' }} onClick={this.props.navbarClick.bind(this, 'work')}>Demo</a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a id="work" className="nav-item nav-link active" style={{ cursor: 'pointer' }} onClick={this.props.navbarClick.bind(this, 'work')}>Work Board</a>
            <a id="ant" className="nav-item nav-link" style={{ cursor: 'pointer' }} onClick={this.props.navbarClick.bind(this, 'ant')}>Ant Pro</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;