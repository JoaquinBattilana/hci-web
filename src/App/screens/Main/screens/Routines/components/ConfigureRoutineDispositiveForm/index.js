import React, { Component } from 'react';
import ConfigureRoutineDispositiveForm from './layout';
import DevicesService from '../../../../../../../services/DevicesService';

class ConfigureRoutineDispositiveFormContainer extends Component {

    state = {
        dispositiveState: {},
        isLoading: false,
        dispositiveActions: []
    }

    componentDidUpdate = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    componentDidMount = () => {
        const { currentDispositive } = this.props;
        this.setState(({isLoading: true}));
        DevicesService.getDeviceType(currentDispositive.typeId).then( response => this.setState({
            dispositiveActions: response.data.device.actions,
            isLoading: false
        }));
    }

    onExit = () => {
        const { setCurrentDispositive } = this.props;
        setCurrentDispositive(null);
    }

    handleSubmit = data => {
        const { currentDispositive, addAction } = this.props;
        const keys = Object.keys(data);
        const newData = keys.map(elem => ({
            deviceId: currentDispositive.id,
            actionName: elem,
            params: [data[elem]],
            meta: null
        }));
        newData.map(elem => addAction(elem));
        this.onExit();
    }
    render() {
        const { currentDispositive } = this.props;
        const { isLoading, dispositiveActions } = this.state;
        return (isLoading ? <h1>LOADING</h1> : (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Configure routine device</h2>
                </div>
                <ConfigureRoutineDispositiveForm
                    executeButtonAction = {this.executeButtonAction}
                    dispositiveId = {currentDispositive.id}
                    onSubmit={this.handleSubmit}
                    actions={dispositiveActions}
                    onExit={this.onExit}
                />
            </div>
        ));
    }
}

export default ConfigureRoutineDispositiveFormContainer;