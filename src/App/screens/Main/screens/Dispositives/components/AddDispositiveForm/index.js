import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';
import roomsActions from '../../../../../../../redux/rooms/actions';
import { SubmissionError } from 'redux-form';

class AddDispositiveFormContainer extends Component {
    componentDidMount = () => {
        const { getRooms } = this.props;
        getRooms();
    }

    handleSubmit = async data => {
        if(data.type === undefined || data.name === undefined){
            throw new SubmissionError( {type: "Ningun tipo fue especificado", name: "El dispositivo tiene que tener un nombre"});
        } 
        const { postDispositive, dispositivesType, postDispositiveRoom } = this.props;
        const readyData = { 
            typeId: dispositivesType.find(elem => elem.id === data.type).id,
            name: data.name,
        };
        postDispositive(readyData, data.room);
    }
    render() {
        const { dispositivesType, rooms, open } = this.props;
        if(!open) {
            return null;
        }
        return (
            <div>
                <h2>Add Dispositive</h2>
                <AddDispositiveForm onSubmit={this.handleSubmit} dispositives={dispositivesType} rooms={rooms} />;
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