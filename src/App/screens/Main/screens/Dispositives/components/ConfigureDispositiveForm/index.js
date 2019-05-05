import React, { Component } from 'react';
import ConfigureDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';

class ConfigureDispositiveFormContainer extends Component {
    handleSubmit = data => {
        const { currentDispositive, putDevice } = this.props;
        const newData = {
            ...currentDispositive,
            name: data.name
        }
        debugger;
        putDevice(newData.id, newData);
    }
    render() {
        return <ConfigureDispositiveForm onSubmit={this.handleSubmit}/>;
    }
}

const mapStateToProps = ({ dispositives: { currentDispositive } }) => ({
    currentDispositive
});

const mapDispatchToProps = dispatch => ({
    putDevice: (deviceId, data) => dispatch(dispositiveActions.putDispositive(deviceId,data))
}); 
export default connect(mapStateToProps, mapDispatchToProps)(ConfigureDispositiveFormContainer);