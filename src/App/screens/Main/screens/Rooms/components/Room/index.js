import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import roomsActions from '../../../../../../../redux/rooms/actions';

class Room extends Component {
    onClickHandler = () => {
        const { selectRoom, room } = this.props;
        selectRoom(room);
    }

    render() {
        const { room } = this.props; 
        return(
            <div className={styles.room}>
                <div className={styles.icon}> ICONO </div>
                <div className={styles.name}>{room.name}</div>
                <Button handleClick={this.onClickHandler} label="DISPOSITIVOS ASOCIADOS"/>
            </div>
        );
    }
}

const MapStateToProps = ({ rooms: { roomSelected }}) => ({
    roomSelected
});

const mapDispatchToProps = dispatch => ({
    selectRoom: room => dispatch(roomsActions.selectRoom(room))
});

export default connect(MapStateToProps, mapDispatchToProps)(Room);
