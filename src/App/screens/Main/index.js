import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Dispositives from './screens/Dispositives';

function Main() {
    return (
        <Fragment>
            <TopBar />
            <SideBar />
            <main className={styles.container}>
                <Dispositives />
            </main>
        </Fragment>
    );
}

export default Main;
