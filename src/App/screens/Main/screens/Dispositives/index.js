import React from 'react';
import AddButton from './components/AddButton';
import Dispositive from '../../../../components/Dispositive';
import styles from './styles.module.scss';

function Dispositives() {
    return(
        <div className={styles.dispositives}>
            <Dispositive />
            <AddButton />
        </div>
    );
}

export default Dispositives;