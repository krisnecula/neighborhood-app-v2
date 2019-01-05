import React, { Component } from 'react';

/* https://reactjs.org/docs/error-boundaries.html */

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
      this.setState({ hasError: true });
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }

export default ErrorBoundary;
