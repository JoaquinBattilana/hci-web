import React, { Component } from 'react';
import RoomsService from '../../../../../../../services/RoomsService';
import Dispositive from '../../../../../../components/Dispositive';
import Button from '../../../../../../components/Button';
import AddRoomDispositiveForm from './components/AddRoomSelectedForm';
import ConfigureDispositiveForm from '../../../Dispositives/components/ConfigureDispositiveForm';
import styles from './styles.module.scss';

class RoomSelected extends Component {
    state = {
        addStateForm: false,
        currentDispositive: null,
        roomSelected: null,
        dispositives: [],
        isLoading: false,
        hasError: null
    }

    toggleAddForm = () => {
        this.setState( state => ({
            addFormState: !state.addFormState
        }));
    }

    setCurrentElement = element => {
        this.setState(({
            currentDispositive: element
        }));
    }

    componentDidMount = () => {
        const { match: { params: {id} }} = this.props;
        this.setState(({isLoading: true}));
        const roomId = id;
        RoomsService.getRoom(roomId)
        .then(response => {
            debugger;
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
        const { addFormState, currentDispositive, roomSelected, dispositives } = this.state;
        return (
            <div className={styles.roomsSelectedLayout}>
                {addFormState && <div className={styles.all}><AddRoomDispositiveForm onExit={this.toggleAddForm} room={roomSelected}/> </div>}
                {currentDispositive && <div className={styles.all}><ConfigureDispositiveForm setCurrentElement={this.setCurrentElement} currentDispositive={currentDispositive} /> </div>}
                <h2 className={styles.title}>Dispositivos de habitacion</h2>
                {dispositives.map(elem =>
                    <Dispositive
                    dispositive={elem}
                    setCurrentDispositive={this.setCurrentElement}
                    />)
                }
                <Button icon="add" iconType="fab" handleClick={this.toggleAddForm} />
             </div>
        ); 
    }
}

export default RoomSelected;