import React, { Component } from 'react';
import styles from './styles.module.scss';

class Dispositive extends Component {
    render() {
        const { name } = this.props; 
        return(
            <div className={styles.dispositive}>
                <div className={styles.icon}> ICONO </div>
                <div className={styles.name}>{name}</div>
                <div className={styles.button}> Boton prender apagar </div>
                <div className={styles.configButton}> Configuracion </div>
            </div>
        );
    }
}

export default Dispositive;
