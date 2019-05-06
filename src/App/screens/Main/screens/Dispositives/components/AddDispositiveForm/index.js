import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';
import roomsActions from '../../../../../../../redux/rooms/actions';

class AddDispositiveFormContainer extends Component {
    componentDidMount = () => {
        const { getRooms } = this.props;
        getRooms();
        debugger;
    }

    handleSubmit = data => {
        const { postDispositive, dispositivesType } = this.props;
        const readyData = { 
            typeId: dispositivesType.find(elem => elem.name === data.type).id,
            name: data.name,
        }; 
        postDispositive(JSON.stringify(readyData));
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