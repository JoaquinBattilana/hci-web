import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import devices from '../../../../../../../services/DevicesService';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';
import { id } from '../../../../../../../constants/deviceId';

class AddDispositiveFormContainer extends Component {
    handleSubmit = data => {
        const readyData = { 
            typeId: id.lamp,
            ...data,
        }; 
        devices.postDevices(JSON.stringify(readyData));
    }
    render() {
        return <AddDispositiveForm onSubmit={this.handleSubmit} />;
    }
}

const mapDispatchToProps = dispatch => ({
    postDispositive: data => dispatch(dispositiveActions.postDispositive(data))
});

export default connect(null, )(AddDispositiveFormContainer);