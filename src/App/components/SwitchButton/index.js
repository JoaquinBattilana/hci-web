import React, {Component} from 'react';
import styles from './styles.module.scss';

class SwitchButton extends Component {
    render() {
        const { handleClick, className, selectedLabel, notSelectedLabel } = this.props;
        return(
            <div className={`${className} ${styles.labels}`}>
                <div className={styles.notSelectedLabel}>{notSelectedLabel}</div>
                <label class="mdl-switch mdl-js-switch">
                    <input type="checkbox" class="mdl-switch__input" onChange={handleClick} />
                </label>
                <div className={styles.selectedLabel}>{selectedLabel}</div>
            </div>
        );
    }
}

export default SwitchButton;