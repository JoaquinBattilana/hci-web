import React, { Component } from 'react';
import WithMainView from '../../components/WithMainView';
import AddRoutineFormContainer from './components/AddRoutineForm';
import RoutinesService from '../../../../../services/RoutinesService';
import Routine from './components/Routine';
import ConfigureRoutineDispositiveFormContainer from './components/ConfigureRoutineDispositiveForm';

class Routines extends Component {
    state = {
        routines: []
    }

    componentDidMount = () => {
        RoutinesService.getRoutines().then(response => {
            this.setState(({
                routines: response.data.routines
            }));
        });
    }

    render() {
        const { routines } = this.state;
        return routines.map(elem => <Routine routine={elem} />);
    }
}

export default WithMainView(Routines, AddRoutineFormContainer, null, "Rutinas");