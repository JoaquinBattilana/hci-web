import React, { Component } from 'react';
import styles from './styles.module.scss';
import Room from './components/Room';
import { connect } from 'react-redux';
import roomsActions from '../../../../../redux/rooms/actions';
import Dispositive from '../../../../components/Dispositive';
import AddRoomForm from './components/AddRoomForm';

class Rooms extends Component {

    componentDidMount = () => {
        const { getRooms } = this.props;
        getRooms();
    }

    render(){
        const { rooms, roomSelected, roomSelectedDispositives } = this.props;
        return(
            <div className={styles.roomsLayout}>
                <h2 className={styles.title}>Habitaciones</h2>
                {rooms.map( elem => <Room room={elem}/>)}
                {roomSelected && roomSelectedDispositives.map(elem => <Dispositive dispositive={elem}/>)}
                <AddRoomForm />
            </div>
        );
    }
}

const mapStateToProps = ({ rooms: { rooms, roomSelected, roomSelectedDispositives} }) => ({
    rooms,
    roomSelected,
    roomSelectedDispositives
});

const mapDispatchToProps = dispatch => ({
    getRooms: () => dispatch(roomsActions.getRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);