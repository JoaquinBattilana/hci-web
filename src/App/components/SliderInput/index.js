import React, { Component } from 'react';
import styles from './styles.module.scss';

class SliderInput extends Component {
    componentDidUpdate = () => {
        window.componentHandler.upgradeAllRegistered();
    }
    render(){
        const {label, min, max, input} = this.props;
        return(
            <div class={styles.sliderLayout}>
                <span>{label}</span>
                <input {...input} type="range"
                min={min} max={max}  defaultValue={0} {...input}  />
            </div>
        );
    }
}

export default SliderInput;