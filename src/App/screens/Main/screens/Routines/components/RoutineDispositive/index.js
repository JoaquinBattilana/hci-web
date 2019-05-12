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

    onAddDispositive = () => {
        const { dispositive, onAddDispositive } = this.props;
        onAddDispositive(dispositive);
    }

    render() {
        const { dispositive, onAddDispositive } = this.props;
        debugger;
        return(
            <div className={`mdl-data-table__cell--non-numeric ${styles.dispositive}`}>
                <i className={`material-icons ${styles.icon}`}>highlight</i>
                <div className={styles.name}>{dispositive.name}</div>
                <Button handleClick={this.onAddDispositive} icon="build" iconType="icon" />
                <Button icon="delete" iconType="icon" />
            </div>
        );
    }
}

export default RoutineDispositive;
