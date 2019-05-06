import React, { Component } from 'react';
import styles from './styles.module.scss';
import Room from './components/Room';
import { connect } from 'react-redux';
import roomsActions from '../../../../../redux/rooms/actions';

class Rooms extends Component {

    componentDidMount = () => {
        const { getRooms } = this.props;
        getRooms();
    }

    render(){
        const { rooms } = this.props;
        return(
            <div className={styles.roomsContainer}>
                {rooms.map( elem => <Room room={elem}/>)}
            </div>
        );
    }
}

const mapStateToProps = ({ rooms: { rooms } }) => ({
    rooms
});

const mapDispatchToProps = dispatch => ({
    getRooms: () => dispatch(roomsActions.getRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);