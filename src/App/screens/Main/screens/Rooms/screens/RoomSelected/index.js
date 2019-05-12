import React, { Component } from 'react';
import RoomsService from '../../../../../../../services/RoomsService';

class RoomSelected extends Component {
    state = {
        roomSelected: null,
        dispositives: [],
        isLoading: false,
        hasError: null
    }

    componentDidMount = () => {
        const { match: { params: {id} }} = this.props;
        this.setState(({isLoading: true}));
        const roomId = id;
        RoomsService.getRoom(roomId)
        .then(response => {
            this.setState(({roomSelected: response.data.room}))
            return RoomsService.getRoomDevices(roomId); })
        .then( response => {
            this.setState({
                dispositives: response.data.devices,
                isLoading: false
            });
        });
        debugger;
    }

    render() {
        return (<h1>HOLA</h1>);
    }
}

export default RoomSelected;