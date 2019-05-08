import React, { Component } from 'react';
import ConfigureDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';
import Options from '../Options';

class ConfigureDispositiveFormContainer extends Component {
    getDispositiveActions = () => {
        const { currentDispositive, dispositivesType } = this.props;
        const currentDispositiveType = dispositivesType.find(elem => elem.id === currentDispositive.typeId);
        return currentDispositiveType.actions;
    }

    capitalize = s => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    executeFormActions = data => {
        const { executeDeviceAction, currentDispositive } = this.props;
        const keys = Object.keys(data);
        keys.map( elem => executeDeviceAction(currentDispositive.id, 'set'+this.capitalize(elem), [{ [elem]: data[elem] }] ));
    }

    handleSubmit = data => {
        const { currentDispositive, putDevice } = this.props;
        const newData = {
            ...currentDispositive,
            name: data.name
        }
        putDevice(newData.id, newData);
        this.executeFormActions(data);
    }
    render() {
        return <ConfigureDispositiveForm onSubmit={this.handleSubmit} options={Options} actions={this.getDispositiveActions()}/>;
    }
}

const mapStateToProps = ({ dispositives: { currentDispositive, dispositivesType } }) => ({
    currentDispositive,
    dispositivesType
});

const mapDispatchToProps = dispatch => ({
    putDevice: (deviceId, data) => dispatch(dispositiveActions.putDispositive(deviceId,data)),
    executeDeviceAction: (deviceId, action, data) => dispatch(dispositiveActions.executeDeviceAction(deviceId, action, data))
}); 
export default connect(mapStateToProps, mapDispatchToProps)(ConfigureDispositiveFormContainer);