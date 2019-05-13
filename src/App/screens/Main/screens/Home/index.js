import React from 'react';
import styles from './styles.module.scss';
import home from '../../../../assets/smart-home.svg';

function Home() {
    return (
        <div>
            <h1 className={styles.title}>Welcome to your Smart Home</h1>
            <img className={styles.centerimage} src={home} alt="Welcome Home Image"/>
        </div>
    );
}

export default Home;