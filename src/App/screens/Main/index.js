import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Dispositives from './screens/Dispositives';

function Main() {
    return (
        <Fragment>
            <TopBar />
            <div className={styles.container}>
                <SideBar />
                <Dispositives />
            </div>
        </Fragment>
    );
}

export default Main;
