import React from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

function SideBar({ toDispositives, toRooms, toRoutines }) {
    return(
        <div className={styles.sidebar}>
            <button onClick={toDispositives}>DISPOSITIVES</button>
            <button onClick={toRooms}>ROOMS</button>
            <button onClick={toRoutines}>ROUTINES</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toDispositives: () => dispatch(push('/dispositives')),
    toRooms: () => dispatch(push('/rooms')),
    toRoutines: () => dispatch(push('/routines'))
});

export default connect(null, mapDispatchToProps)(SideBar);