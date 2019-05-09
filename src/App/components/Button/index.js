import React, { Component } from 'react';

class Button extends Component {
    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }
    render() {
        const { label, icon, handleClick, circle, type} = this.props;
        const shape = (circle ? 'fab' : 'raised');
        return (
            <button 
                class={`mdl-button mdl-js-button mdl-button--${shape} mdl-button--colored`}
                onClick={handleClick}
                type={type ? type : 'button'}>
                    {label}
                    {icon ? <i class="material-icons">add</i> : null}
            </button>
        ); 
    }
}

export default Button;