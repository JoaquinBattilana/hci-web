import React from 'react';
import styles from './styles.module.scss'

function Popup({ trigger, component: Component }) {
        if(!trigger){
            return null;
        }
        return(
            <div className={styles.all}>
               {Component}
            </div>
        );

}

export default Popup;