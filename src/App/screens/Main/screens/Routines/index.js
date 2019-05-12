import React from 'react';
import styles from './styles.module.scss';
import WithMainView from '../../components/WithMainView';

function Routines() {
    return <h1 className={styles.test}>aca las rutinas</h1>;
}

export default WithMainView(Routines, null, null, "Rutinas");