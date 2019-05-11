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
import WithMainView from './components/WithMainView';
import AddDispositiveForm from './screens/Dispositives/components/AddDispositiveForm';
import ConfigureDispositiveForm from './screens/Dispositives/components/ConfigureDispositiveForm';

function Main() {
    return (
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
        mdl-layout--fixed-header">
        <TopBar />
        <SideBar />
        <main class="mdl-layout__content">
            <div class={`page-content`}>
                <Switch>
                    <Route path="/dispositives" render={() => <WithMainView Elements={Dispositives} AddForm={AddDispositiveForm} ConfigureForm={ConfigureDispositiveForm} title="Dispositivos"/>} />
                    <Route path="/rooms" component={Rooms} />
                    <Route path="/routines" component={Routines} />
                    <Route path="/button" component={SwitchButton} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </main>
        </div>
    );
}

export default Main;