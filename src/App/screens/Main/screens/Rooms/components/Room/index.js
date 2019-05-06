import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../../../../../../components/Button';

class Room extends Component {
    render() {
        const { room } = this.props; 
        return(
            <div className={styles.room}>
                <div className={styles.icon}> ICONO </div>
                <div className={styles.name}>{room.name}</div>
                <Button label="DISPOSITIVOS ASOCIADOS"/>
            </div>
        );
    }
}

export default Room;
