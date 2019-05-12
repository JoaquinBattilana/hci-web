import React, { Component } from 'react';
import Room from './components/Room';
import { connect } from 'react-redux';
import roomsActions from '../../../../../redux/rooms/actions';
import WithMainView from '../../components/WithMainView';
import AddRoomForm from './components/AddRoomForm';

class Rooms extends Component {

    componentDidMount = () => {
        const { getRooms } = this.props;
        getRooms();
    }

    render(){
        const { rooms, setCurrentElement } = this.props;
        return rooms.map(elem => <Room room={elem} onAsociatedClick={setCurrentElement}/>);
    }
}

const mapStateToProps = ({ rooms: { rooms } }) => ({
    rooms
});

const mapDispatchToProps = dispatch => ({
    getRooms: () => dispatch(roomsActions.getRooms())
});

export default WithMainView(connect(mapStateToProps, mapDispatchToProps)(Rooms), AddRoomForm, null, "Habitaciones");