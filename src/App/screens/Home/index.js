import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';

function Home() {
    return (
        <Fragment>
            <TopBar />
            <SideBar />
        </Fragment>
    );
}

export default Home;
