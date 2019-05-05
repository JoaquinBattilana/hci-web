import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../Button';

class Dispositive extends Component {
    render() {
        const { name } = this.props; 
        return(
            <div className={styles.dispositive}>
                <div className={styles.icon}> ICONO </div>
                <div className={styles.name}>{name}</div>
                <Button label="Prender/Apagar"/>
                <Button label="Configuracion"/>
            </div>
        );
    }
}

export default Dispositive;
