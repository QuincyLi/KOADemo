import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { 
    hasError: false
  }

  componentDidCatch(error){
    this.setState({
      hasError: true
    })
  }

  render() {
    if(this.state.hasError){
      return (
        <span>Something went wrong!!</span>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;