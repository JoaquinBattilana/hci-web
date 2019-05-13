import React, { Component } from 'react';
import styles from './styles.module.scss';
import SwitchButton from '../SwitchButton';
import Button from '../Button';
import DevicesService from '../../../services/DevicesService';
import { DEVICES_ICON_ID } from '../../../constants/devices';
import { toast } from 'react-toastify';

class Dispositive extends Component {
    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    onConfigClickHandler = () => {
        const { dispositive, setCurrentDispositive } = this.props
        setCurrentDispositive(dispositive);
    }
    
    onDeleteClickHandler = () => {
        const { dispositive } = this.props
        DevicesService.deleteDevice(dispositive.id).then(toast("Device was deleted"));
    }

    executeOn = () => {
        const { dispositive } = this.props;
        DevicesService.executeDeviceAction(dispositive.id, "turnOn");
    }

    executeOff = () => {
        const { dispositive } = this.props;
        DevicesService.executeDeviceAction(dispositive.id, "turnOff");
    }

    render() {
        const { dispositive, isToggable } = this.props; 
        return(
            <div className={`mdl-data-table__cell--non-numeric ${styles.dispositive}`}>
                <i className={`material-icons ${styles.icon}`}>{DEVICES_ICON_ID[dispositive.typeId]}</i>
                <div className={styles.name}>{dispositive.name}</div>
                {isToggable && <SwitchButton handleOn={this.executeOn} handleOff={this.executeOff} className={styles.switch} />}
                <Button handleClick={this.onConfigClickHandler} icon="settings" iconType="icon" />
                <Button handleClick={this.onDeleteClickHandler} icon="delete" iconType="icon" />
            </div>
        );
    }
}


export default Dispositive;
