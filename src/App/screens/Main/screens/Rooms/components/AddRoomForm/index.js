import React, { Component } from 'react';
import { connect } from 'react-redux';
import roomActions from '../../../../../../../redux/rooms/actions'
import AddRoomForm from './layout';

class AddRoomFormContainer extends Component {

    handleSubmit = data => {
        const newData = {
            name: data.name,
        };
        const { postRoom } = this.props;
        postRoom(newData);
        onExit();
    }
    render() {
        const { onExit } = this.props;
        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Agregar habitacion</h2>
                </div>
                <AddRoomForm onSubmit={this.handleSubmit}  onExit={onExit} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postRoom: data => dispatch(roomActions.postRoom(data))
});

export default connect(null, mapDispatchToProps)(AddRoomFormContainer);