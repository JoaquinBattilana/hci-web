import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../../../../../../components/Button';
import RoutinesService from '../../../../../../../services/RoutinesService';

class Routine extends Component {

    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    onClickHandler = () => {
        const { routine } = this.props;
        RoutinesService.executeRoutine(routine.id);
    }

    render() {
        const { routine } = this.props; 
        return(
            <div className={`mdl-data-table__cell--non-numeric ${styles.routine}`}>
                <i className={`material-icons ${styles.icon}`}>loop</i>
                <div className={styles.name}>{routine.name}</div>
                <Button handleClick={this.onClickHandler} label="EXECUTE ROUTINE"/>
            </div>
        );
    }
}

export default Routine;