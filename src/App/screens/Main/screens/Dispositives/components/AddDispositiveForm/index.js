import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import { SubmissionError } from 'redux-form';
import DevicesService from '../../../../../../../services/DevicesService';
import RoomsService from '../../../../../../../services/RoomsService';
import { toast } from 'react-toastify';

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
            throw new SubmissionError( {type: "Is required", name: "Is required"});
        } 
        const { onExit } = this.props;
        const { dispositivesTypes } = this.state;
        const readyData = { 
            typeId: dispositivesTypes.find(elem => elem.id === data.type).id,
            name: data.name,
        };
        DevicesService.postDevice(readyData).then(response =>{
            if(response.ok) {
                if(data.room===undefined){
                    toast("Device was added");
                }
                else { 
                    DevicesService.postDeviceRoom(response.data.device.id, data.room).then( response =>{
                        if(response.ok){
                            toast("Device was added");
                        } else {
                            toast.error(response.data.error.description[0])
                        }
                    }).catch(error => toast.error(error));
                };
            }
            else {
                toast.error(response.data.error.description[0]);
            }
        }).catch(error => toast.error(error));
        onExit();
    }
    render() {
        const { dispositivesTypes, rooms } = this.state; 
        const {onExit} = this.props;
        return (
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Add dispositive</h2>
            </div>
            <AddDispositiveForm onSubmit={this.handleSubmit} dispositives={dispositivesTypes} rooms={rooms} onExit={onExit} />
        </div>
        );
    }
}

export default AddDispositiveFormContainer;