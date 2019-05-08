import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Route, Switch } from 'react-router';
import Dispositives from './screens/Dispositives';
import Rooms from './screens/Rooms';
import Routines from './screens/Routines';
import NotFound from './screens/NotFound';
import SwitchButton from '../../components/SwitchButton';

function Main() {
    return (
        <Fragment>
            <TopBar />
            <SideBar />
            <main className={styles.container}>
                <Switch>
                    <Route path="/dispositives" component={Dispositives} />
                    <Route path="/rooms" component={Rooms} />
                    <Route path="/routines" component={Routines} />
                    <Route path="/button" component={SwitchButton} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Fragment>
    );
}

export default Main;
