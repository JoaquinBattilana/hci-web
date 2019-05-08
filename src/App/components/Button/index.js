import React, { Component } from 'react';

class Button extends Component {
    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }
    render() {
        const { label, handleClick } = this.props;
        return (
            <button class="mdl-button mdl-js-button mdl-button--raised" onClick={handleClick}>
            {label}
            </button>
        ); 
    }
}

export default Button;