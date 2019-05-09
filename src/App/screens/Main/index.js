import React from 'react';
import styles from './styles.module.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Route, Switch } from 'react-router';
import Dispositives from './screens/Dispositives';
import Rooms from './screens/Rooms';
import Routines from './screens/Routines';
import NotFound from './screens/NotFound';
import SwitchButton from '../../components/SwitchButton';
import SliderInput from '../../components/SliderInput';

function Main() {
    return (
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
        mdl-layout--fixed-header">
        <TopBar />
        <SideBar />
        <main class="mdl-layout__content">
            <div class={`page-content`}>
                <Switch>
                    <Route path="/dispositives" component={Dispositives} />
                    <Route path="/rooms" component={Rooms} />
                    <Route path="/routines" component={Routines} />
                    <Route path="/button" component={SwitchButton} />
                    <Route path="/slider" render={ () => <SliderInput min={0} max={100}/>} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </main>
        </div>
    );
}

export default Main;