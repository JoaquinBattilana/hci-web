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
        debugger;
    }

    handleSubmit = data => {
        if(data.type === undefined || data.name === undefined){
            throw new SubmissionError( {type: "Ningun tipo fue especificado", name: "El dispositivo tiene que tener un nombre"});
        } 
        const { postDispositive, dispositivesType } = this.props;
        debugger;
        const readyData = { 
            typeId: dispositivesType.find(elem => elem.id === data.type).id,
            name: data.name,
        }; 
        postDispositive(JSON.stringify(readyData));
        if(data.room !== undefined){
            
        }
    }
    render() {
        const { dispositivesType, rooms } = this.props;
        return <AddDispositiveForm onSubmit={this.handleSubmit} dispositives={dispositivesType} rooms={rooms} />;
    }
}

const mapStateToProps = ({ dispositives: { dispositivesType }, rooms: { rooms } }) => ({
    dispositivesType,
    rooms
});

const mapDispatchToProps = dispatch => ({
    postDispositive: data => dispatch(dispositiveActions.postDispositive(data)),
    getRooms: () => dispatch(roomsActions.getRooms())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDispositiveFormContainer);