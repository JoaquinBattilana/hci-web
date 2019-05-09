import React, { Component } from 'react';

class Button extends Component {
    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }
    render() {
        const { label, icon, handleClick, iconType, type} = this.props;
        return (
            <button 
                class={`mdl-button mdl-js-button mdl-button--${iconType} mdl-button--colored`}
                onClick={handleClick}
                type={type ? type : 'button'}>
                    {label}
                    {icon ? <i class="material-icons">{icon}</i> : null}
            </button>
        ); 
    }
}

export default Button;