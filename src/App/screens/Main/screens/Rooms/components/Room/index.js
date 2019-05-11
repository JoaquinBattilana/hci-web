import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../../../../../../components/Button';
import { connect } from 'react-redux';
import roomsActions from '../../../../../../../redux/rooms/actions';

class Room extends Component {

    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    onClickHandler = () => {
        const { selectRoom, room } = this.props;
        selectRoom(room);
    }

    render() {
        const { room } = this.props; 
        return(
            <div className={`mdl-data-table__cell--non-numeric ${styles.room}`}>
                <i className={`material-icons ${styles.icon}`}>highlight</i>
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
