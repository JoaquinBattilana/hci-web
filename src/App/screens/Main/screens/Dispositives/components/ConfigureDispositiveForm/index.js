import React, { Component } from 'react';
import ConfigureDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';
import Options from '../Options';
import devices from '../../../../../../../services/DevicesService';

class ConfigureDispositiveFormContainer extends Component {

    state = {
        dispositiveState: {},
        isLoading: false
    }

    componentDidMount = () => {
        this.getDispositiveState();
    }

    componentDidUpdate = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    getDispositiveState = async () => {
        debugger;
        const { currentDispositive } = this.props;
        if(!currentDispositive) {
            return null;
        }
        this.setState({isLoading: true});
        const response = await devices.executeDeviceAction(currentDispositive.id, "getState");
        if(response.ok){
            debugger;
            this.setState({
                dispositiveState: {
                    name: currentDispositive.name,
                    ...response.data.result
                },
                isLoading: false
            })
        }
    }

    getDispositiveActions = () => {
        const { currentDispositive, dispositivesType } = this.props;
        if(!currentDispositive){
            return null;
        }
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

    onExit = () => {
        const { setCurrentDispositive } = this.props;
        setCurrentDispositive(null);
    }

    handleSubmit = data => {
        const { putDevice, currentDispositive } = this.props;
        const newData = {
            ...currentDispositive,
            name: data.name
        }
        putDevice(newData.id, newData);
        this.executeFormActions(data);
    }
    render() {
        const { title } = this.props;
        const { isLoading, dispositiveState } = this.state;
        return (isLoading ? <h1>LOADING</h1> : (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{title}</h2>
                </div>
                <ConfigureDispositiveForm
                    onSubmit={this.handleSubmit}
                    options={Options}
                    actions={this.getDispositiveActions()}
                    initialValues={{...dispositiveState}}
                    onExit={this.onExit}
                />
            </div>
        ));
    }
}

const mapStateToProps = ({ dispositives: {dispositivesType} }) => ({
    dispositivesType
});

const mapDispatchToProps = dispatch => ({
    putDevice: (deviceId, data) => dispatch(dispositiveActions.putDispositive(deviceId,data)),
    executeDeviceAction: (deviceId, action, data) => dispatch(dispositiveActions.executeDeviceAction(deviceId, action, data))
}); 
export default connect(mapStateToProps, mapDispatchToProps)(ConfigureDispositiveFormContainer);