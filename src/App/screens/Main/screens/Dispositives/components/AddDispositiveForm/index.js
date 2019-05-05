import React, { Component } from 'react';
import AddDispositiveForm from './layout';

class AddDispositiveFormContainer extends Component {
    handleSubmit = data => {
        alert("working");
    }
    render() {
        return <AddDispositiveForm onSubmit={this.handleSubmit} />;
    }
}

export default AddDispositiveFormContainer;