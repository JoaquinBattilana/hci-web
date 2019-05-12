import React, {Component} from 'react';
import styles from './styles.module.scss';

class SwitchButton extends Component {

    state = {
        checked: true
    }

    componentDidMount = () => {
        const { checked } = this.props;
        if(checked !== undefined) {
            this.setState(({checked}));
        }
    }

    handleChange = e => {
        const { checked } = this.state;
        const { handleOn, handleOff } = this.props;
        if(checked){
            handleOn();
        }
        else {
            handleOff();
        }
        this.setState(state => ({
            checked: !state.checked
        }));
    }

    render() {
        const { className, selectedLabel, notSelectedLabel } = this.props;
        return(
            <div className={`${className} ${styles.labels}`}>
                <div className={styles.notSelectedLabel}>{notSelectedLabel}</div>
                <label class="mdl-switch mdl-js-switch">
                    <input type="checkbox" class="mdl-switch__input" onChange={this.handleChange} />
                </label>
                <div className={styles.selectedLabel}>{selectedLabel}</div>
            </div>
        );
    }
}

export default SwitchButton;