import React, { Component } from 'react';
import WithMainView from '../../components/WithMainView';
import AddRoutineFormContainer from './components/AddRoutineForm';
import RoutinesService from '../../../../../services/RoutinesService';
import Routine from './components/Routine';
import { toast } from 'react-toastify';

class Routines extends Component {
    state = {
        routines: []
    }

    componentDidMount = () => {
        RoutinesService.getRoutines().then(response => {
            if(response.ok){
                this.setState(({
                    routines: response.data.routines
                }));
            } else {
                toast.error("There was an error connecting to the server.");
            }
        });
    }

    render() {
        const { routines } = this.state;
        return routines.map(elem => <Routine routine={elem} />);
    }
}

export default WithMainView(Routines, AddRoutineFormContainer, null, "Routines");