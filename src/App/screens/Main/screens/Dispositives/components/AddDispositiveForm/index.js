import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import { SubmissionError } from 'redux-form';
import DevicesService from '../../../../../../../services/DevicesService';
import RoomsService from '../../../../../../../services/RoomsService';

class AddDispositiveFormContainer extends Component {

    state = {
        isLoading: false,
        error: null,
        dispositivesTypes: [],
        rooms: []
    }

    componentDidMount = () => {
        DevicesService.getDevicesTypes()
            .then(response => {
                this.setState(({dispositivesTypes: response.data.devices}));
                return RoomsService.getRooms();
            })
            .then(response => this.setState(({
                rooms: response.data.rooms,
                isLoading: false
            })));
        window.componentHandler.upgradeAllRegistered();
    }

    handleSubmit = data => {
        if(data.type === undefined || data.name === undefined){
            throw new SubmissionError( {type: "Ningun tipo fue especificado", name: "El dispositivo tiene que tener un nombre"});
        } 
        const { onExit } = this.props;
        const { dispositivesTypes } = this.state;
        const readyData = { 
            typeId: dispositivesTypes.find(elem => elem.id === data.type).id,
            name: data.name,
        };
        DevicesService.postDevice(readyData).then(response => DevicesService.postDeviceRoom(response.data.device.id, data.room));
        onExit();
    }
    render() {
        const { dispositivesTypes, rooms } = this.state; 
        const {onExit} = this.props;
        return (
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Agregar dispositivo</h2>
            </div>
            <AddDispositiveForm onSubmit={this.handleSubmit} dispositives={dispositivesTypes} rooms={rooms} onExit={onExit} />
        </div>
        );
    }
}

export default AddDispositiveFormContainer;