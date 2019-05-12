import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../../../../../../components/Button';
import DevicesService from '../../../../../../../services/DevicesService';

class RoutineDispositive extends Component {

    state = {
        deviceType: {}
    }

    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
        this.getDeviceType();
    }

    getDeviceType = () => {
        const { dispositive } = this.props;
        DevicesService.getDeviceType(dispositive.typeId).then( response => this.setState({deviceType: response.data.device}));
    }

    render() {
        const { dispositive, handleClick, icon } = this.props;
        debugger;
        return(
            <div className={`mdl-data-table__cell--non-numeric ${styles.routine}`}>
                <i className={`material-icons ${styles.icon}`}>highlight</i>
                <div className={styles.name}>{dispositive.name}</div>
                <Button handleClick={handleClick} icon={icon} iconType="icon" />
            </div>
        );
    }
}

export default RoutineDispositive;
