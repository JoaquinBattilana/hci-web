import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../../../../../../components/Button';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

class Room extends Component {

    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    onClickHandler = () => {
        const { room } = this.props;
        this.props.push('/rooms/'+room.id);
    }

    render() {
        const { room } = this.props; 
        return(
            <div className={`mdl-data-table__cell--non-numeric ${styles.room}`}>
                <i className={`material-icons ${styles.icon}`}>highlight</i>
                <div className={styles.name}>{room.name}</div>
                <Button handleClick={this.onClickHandler} label="DISPOSITIVOS ASOCIADOS"/>
            </div>
        );
    }
}

export default connect(null, { push } )(Room);
