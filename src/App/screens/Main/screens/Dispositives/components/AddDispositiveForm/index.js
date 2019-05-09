import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';
import roomsActions from '../../../../../../../redux/rooms/actions';
import { SubmissionError } from 'redux-form';

class AddDispositiveFormContainer extends Component {
    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
        const { getRooms } = this.props;
        getRooms();
    }

    handleSubmit = async data => {
        if(data.type === undefined || data.name === undefined){
            throw new SubmissionError( {type: "Ningun tipo fue especificado", name: "El dispositivo tiene que tener un nombre"});
        } 
        const { postDispositive, dispositivesType, onExit } = this.props;
        const readyData = { 
            typeId: dispositivesType.find(elem => elem.id === data.type).id,
            name: data.name,
        };
        onExit();
        postDispositive(readyData, data.room);
    }
    render() {
        const { dispositivesType, rooms, open, onExit } = this.props;
        if(open) {
            return null;
        }
        return (
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Welcome</h2>
            </div>
            <AddDispositiveForm onSubmit={this.handleSubmit} dispositives={dispositivesType} rooms={rooms} onExit={onExit} />
        </div>
        );    
    }
}

const mapStateToProps = ({ dispositives: { dispositivesType }, rooms: { rooms } }) => ({
    dispositivesType,
    rooms
});

const mapDispatchToProps = dispatch => ({
    postDispositive: (data, roomId)  => dispatch(dispositiveActions.postDispositive(data, roomId)),
    getRooms: () => dispatch(roomsActions.getRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDispositiveFormContainer);