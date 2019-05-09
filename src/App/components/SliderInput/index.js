import React, { Component } from 'react';

class SliderInput extends Component {
    componentDidUpdate = () => {
        window.componentHandler.upgradeAllRegistered();
    }
    render(){
        const {min, max, input } = this.props;
        return(
            <input {...input}  class="mdl-slider mdl-js-slider" type="range"
             min={min} max={max} />
        );
    }
}

export default SliderInput;