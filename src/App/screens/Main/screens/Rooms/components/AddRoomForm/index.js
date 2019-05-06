import React, { Component } from 'react';
import AddRoomForm from './layout';
import { connect } from 'react-redux';
import roomActions from '../../../../../../../redux/rooms/actions'

class AddRoomFormContainer extends Component {

    handleSubmit = async data => {
        const newData = {
            name: data.name,
        };
        const { postRoom } = this.props;
        postRoom(newData);
    }
    render() {
        return <AddRoomForm onSubmit={this.handleSubmit} />;
    }
}

const mapDispatchToProps = dispatch => ({
    postRoom: data => dispatch(roomActions.postRoom(data))
});

export default connect(null, mapDispatchToProps)(AddRoomFormContainer);