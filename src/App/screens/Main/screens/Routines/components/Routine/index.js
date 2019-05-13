import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../../../../../../components/Button';
import RoutinesService from '../../../../../../../services/RoutinesService';
import { toast } from 'react-toastify';

class Routine extends Component {

    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    onClickHandler = () => {
        const { routine } = this.props;
        RoutinesService.executeRoutine(routine.id).then( response => {
            if(response.ok){
                toast("Routin was executed");
            }
            else {
                toast.error("There was an error executing the routine");
            }
        });
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