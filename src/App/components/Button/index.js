import React, { Component } from 'react';

class Button extends Component {
    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }
    render() {
        debugger;
        const { label, icon, handleClick, circle } = this.props;
        const shape = (circle ? 'fab' : 'raised');
        return (
            <button class={`mdl-button mdl-js-button mdl-button--${shape} mdl-button--colored`} onClick={handleClick}>
            {label}
            {icon ? <i class="material-icons">add</i> : null}
            </button>
        ); 
    }
}

export default Button;