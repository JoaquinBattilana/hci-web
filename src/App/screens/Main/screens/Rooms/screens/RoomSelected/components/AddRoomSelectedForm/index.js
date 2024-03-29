import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../../../redux/dipositives/actions'; 
import { SubmissionError } from 'redux-form';

class AddRoomDispositiveFormContainer extends Component {
    componentDidMount = () => {
        const { getDispositiveTypes } = this.props;
        window.componentHandler.upgradeAllRegistered();
        getDispositiveTypes();
    }

    handleSubmit = data => {
        if(data.type === undefined || data.name === undefined){
            throw new SubmissionError( {type: "Ningun tipo fue especificado", name: "El dispositivo tiene que tener un nombre"});
        } 
        const { postDispositive, dispositivesType, onExit, room} = this.props;
        const readyData = { 
            typeId: dispositivesType.find(elem => elem.id === data.type).id,
            name: data.name,
        };
        postDispositive(readyData, room.id);
        onExit();
    }
    render() {
        const { dispositivesType, rooms, onExit} = this.props;
        return (
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Agregar dispositivo</h2>
            </div>
            <AddDispositiveForm onSubmit={this.handleSubmit} dispositives={dispositivesType} rooms={rooms} onExit={onExit} />
        </div>
        );
    }
}

const mapStateToProps = ({ dispositives: { dispositivesType } }) => ({
    dispositivesType
});

const mapDispatchToProps = dispatch => ({
    postDispositive: (data, roomId)  => dispatch(dispositiveActions.postDispositive(data, roomId)),
    getDispositiveTypes: () => dispatch(dispositiveActions.getDispositivesTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRoomDispositiveFormContainer);