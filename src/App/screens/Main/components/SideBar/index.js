import React from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';

function SideBar({ toDispositives, toRooms, toRoutines }) {
    return(
        <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
                <Link className="mdl-navigation__link" to="/dispositives" >Dispositives</Link>
                <Link className="mdl-navigation__link" to="/rooms" >Rooms</Link>
                <Link className="mdl-navigation__link" to="/routines" >Routines</Link>
            </nav>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toDispositives: () => dispatch(push('/dispositives')),
    toRooms: () => dispatch(push('/rooms')),
    toRoutines: () => dispatch(push('/routines'))
});

export default connect(null, mapDispatchToProps)(SideBar);