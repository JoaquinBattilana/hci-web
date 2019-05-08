import React from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

function SideBar({ toDispositives, toRooms, toRoutines }) {
    return(
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Title</span>
            <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
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