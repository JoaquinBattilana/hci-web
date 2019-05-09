import React, { Component } from 'react';

class SliderInput extends Component {
    componentDidUpdate = () => {
        window.componentHandler.upgradeAllRegistered();
    }
    render(){
        const {id, min, max, input } = this.props;
        return(
            <div>
                <input class="mdl-slider mdl-js-slider" id={id} type="range"
                min={min} max={max}  value={0} {...input}   />
            </div>
        );
    }
}

export default SliderInput;