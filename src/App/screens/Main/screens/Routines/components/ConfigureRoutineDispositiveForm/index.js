import React, { Component } from 'react';
import ConfigureRoutineDispositiveForm from './layout';
import DevicesService from '../../../../../../../services/DevicesService';

class ConfigureRoutineDispositiveFormContainer extends Component {

    state = {
        dispositiveState: {},
        isLoading: false,
        dispotiveActions: []
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

    capitalize = s => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    executeFormActions = data => {
        const { currentDispositive } = this.props;
        const keys = Object.keys(data);

    }

    onExit = () => {
        const { setCurrentDispositive } = this.props;
        setCurrentDispositive(null);
    }

    handleSubmit = data => {
        debugger;
        const { currentDispositive } = this.props;
        const newData = {
            ...currentDispositive,
            name: data.name
        }
        this.onExit();
    }
    render() {
        const { currentDispositive } = this.props;
        const { isLoading, dispositiveActions } = this.state;
        debugger;
        return (isLoading ? <h1>LOADING</h1> : (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Configurar dispositivo de rutina</h2>
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