import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error) {
      this.setState({
        hasError: true
      });
    }
    render() {
        if(this.state.hasError) {
            return <h3> Lo siento, hubo un error al conectar con la API</h3>
        }
        else {
            return this.props.children;
        }
    }
  }

  export default ErrorBoundary;