import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Route, Switch } from 'react-router';
import Dispositives from './screens/Dispositives';
import NotFound from './screens/NotFound';

function Main() {
    return (
        <Fragment>
            <TopBar />
            <SideBar />
            <main className={styles.container}>
                <Switch>
                    <Route path="/dispositives" component={Dispositives} />
                    <Route component = {NotFound} />
                </Switch>
            </main>
        </Fragment>
    );
}

export default Main;
