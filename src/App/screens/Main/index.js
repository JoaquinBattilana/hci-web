import React from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Route, Switch } from 'react-router';
import Dispositives from './screens/Dispositives';
import Rooms from './screens/Rooms';
import Routines from './screens/Routines';
import NotFound from './screens/NotFound';
import RoomSelected from './screens/Rooms/screens/RoomSelected';
import ErrorBoundary from '../../components/ErrorBoundary';

function Main() {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
        mdl-layout--fixed-header">
        <TopBar />
        <SideBar />
        <main className="mdl-layout__content">
            <div className={`page-content`}>
            <ErrorBoundary>
                <Switch>
                    <Route exact path="/dispositives" component={Dispositives} />
                    <Route exact path="/rooms" component={Rooms} />
                    <Route exact path="/routines" component={Routines} />
                    <Route path="/rooms/:id" render={(props) => < RoomSelected {...props}/>} />
                    <Route component={NotFound} />
                </Switch>
            </ErrorBoundary>
            </div>
        </main>
        </div>
    );
}

export default Main;