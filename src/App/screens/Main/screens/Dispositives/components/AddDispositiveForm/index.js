import React, { Component } from 'react';
import AddDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';
import DEVICES from '../../../../../../../constants/devices';

class AddDispositiveFormContainer extends Component {
    handleSubmit = data => {
        const { postDispositive } = this.props;
        const readyData = { 
            typeId: data.type,
            name: data.name,
        }; 
        postDispositive(JSON.stringify(readyData));
    }
    render() {
        return <AddDispositiveForm onSubmit={this.handleSubmit} />;
    }
}

const mapDispatchToProps = dispatch => ({
    postDispositive: data => dispatch(dispositiveActions.postDispositive(data))
});

export default connect(null, mapDispatchToProps)(AddDispositiveFormContainer);