import React, { Component } from 'react';
import styles from './styles.module.scss';
import WithMainView from '../../components/WithMainView';
import AddRoutineFormContainer from './components/Routine/AddRoutineForm';

class Routines extends Component {
    render() {
        return <AddRoutineFormContainer />;
    }
}

export default WithMainView(Routines, null, null, "Rutinas");