import React, { Component } from 'react';
import styles from './styles.module.scss';

class Dispositive extends Component {
    render() {
        return(
            <div className={styles.dispositive}>
                <div className> ICONO </div>
                <div>Nombre dispositivo</div>
                <div className={styles.button}> Boton prender apagar </div>
                <div className={styles.configButton}> Configuracion </div>
            </div>
        );
    }
}

export default Dispositive;
