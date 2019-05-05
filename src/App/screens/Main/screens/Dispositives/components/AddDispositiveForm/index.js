import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import devices from '../../../../../../../services/DevicesService';

class AddDispositiveFormContainer extends Component {
    handleSubmit = data => {
        const readyData = { 
            typeId: "go46xmbleomjrsjr",
            ...data,
            meta: "{}"
        }; 
        devices.postDevices(JSON.stringify(readyData));
    }
    render() {
        return <AddDispositiveForm onSubmit={this.handleSubmit} />;
    }
}

export default AddDispositiveFormContainer;