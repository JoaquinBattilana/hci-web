import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../../../../../../components/Button';

class Routine extends Component {

    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    onClickHandler = () => {
    }

    render() {
        const { routine } = this.props; 
        return(
            <div className={`mdl-data-table__cell--non-numeric ${styles.routine}`}>
                <i className={`material-icons ${styles.icon}`}>highlight</i>
                <div className={styles.name}>{routine.name}</div>
                <Button handleClick={this.onClickHandler} label="EJECUTAR RUTINA"/>
            </div>
        );
    }
}

export default Routine;
{
}