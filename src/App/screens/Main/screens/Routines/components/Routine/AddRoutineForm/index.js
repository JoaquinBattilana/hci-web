import React, { Component } from 'react';
import DevicesService from '../../../../../../../../services/DevicesService';
import RoutineDispositive from '../../RoutineDispositive';

class AddRoutineFormContainer extends Component {
    state = {
        addedDispositives: [],
        otherDispositives: []
    }

    componentDidMount = () => {
        DevicesService.getDevices().then( response => this.setState({otherDispositives: response.data.devices}));
    }

    addDispositiveToRoutine = dispositive => {
        const { otherDispositives } = this.state;
        otherDispositives.map(elem=>{
            if(elem.id===dispositive.id){
                this.setState(state => ({
                    addedDispositives: state.addedDispositives.concat(dispositive),
                    otherDispositives: state.otherDispositives.filter(elem=> elem.id !==dispositive.id)
                    })
                );
            }
        })
    }

    render() {
        const { addedDispositives, otherDispositives } = this.state;
        debugger;
        return(
            <div>
                DISPOSITIVOS AGREGADOS:
                {addedDispositives.map( elem => <RoutineDispositive dispositive={elem}/>)}
                DISPOSITIVOS NO AGREGADOS:
                {otherDispositives.map( elem => <RoutineDispositive dispositive={elem} onAddDispositive={this.addDispositiveToRoutine}/>)}
            </div>
        );
    }
}

export default AddRoutineFormContainer;