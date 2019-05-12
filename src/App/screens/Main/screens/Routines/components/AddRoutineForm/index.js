import React, { Component } from 'react';
import RoutineDispositive from '../RoutineDispositive';
import DevicesService from '../../../../../../../services/DevicesService';
import RoutinesService from '../../../../../../../services/RoutinesService';
import AddRoutineForm from './layout';
import styles from './styles.module.scss';
import ConfigureRoutineDispositiveFormContainer from '../ConfigureRoutineDispositiveForm';

class AddRoutineFormContainer extends Component {
    state = {
        addedDispositives: [],
        otherDispositives: [],
        currentDispositive: null,
        actions: []
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

    setCurrentDispositive = dispositive => {
        this.setState(({currentDispositive: dispositive}));
    }

    handleSubmit = data => {
        RoutinesService.postRoutine(data.name);
    }

    render() {
        const { addedDispositives, otherDispositives, currentDispositive } = this.state;
        const { onExit } = this.props;
        debugger;
        return(
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Agregar rutina</h2>
                </div>
                <div className={styles.addDispositives}>
                    <p> Dispositivos agregados:</p>
                    {addedDispositives.map( elem => <RoutineDispositive dispositive={elem} icon="settings" handleClick={()=>this.setCurrentDispositive(elem)}/>)}
                    <p> Dispositivos no agregados: </p>
                    {otherDispositives.map( elem => <RoutineDispositive dispositive={elem} icon="add" handleClick={()=>this.addDispositiveToRoutine(elem)} />)}
                </div>
                <AddRoutineForm onExit={onExit}/>
                {currentDispositive && <ConfigureRoutineDispositiveFormContainer currentDispositive={currentDispositive} setCurrentDispositive={this.setCurrentDispositive}/>}
            </div>
        );
    }
}

export default AddRoutineFormContainer;