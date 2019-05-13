import React, { Component } from 'react';
import Dispositive from '../../../../components/Dispositive';
import AddDispositiveForm from './components/AddDispositiveForm';
import ConfigureDispositiveForm from './components/ConfigureDispositiveForm';
import WithMainView from '../../components/WithMainView';
import DevicesService from '../../../../../services/DevicesService';
import { toast } from 'react-toastify';

class Dispositives extends Component {

    state = {
        isLoading: false,
        error: null,
        dispositives: [],
        dispositivesTypes: []
    }
    
    componentDidMount = () => {
        this.setState(({isLoading: true}));
        DevicesService.getDevicesTypes()
            .then(response => {
                if(response.ok){
                    this.setState(({dispositivesTypes: response.data.devices}));
                    DevicesService.getDevices().then(response => {
                        if(response.ok){
                            this.setState(({
                            dispositives: response.data.devices,
                            isLoading: false
                            }))
                        }
                    })
                }
                else {
                    toast.error(response.originalError);
                }
            })
    }

    isToggable = dispositive => {
        const { dispositivesTypes } = this.state;
        if(dispositivesTypes.find(elem => dispositive.typeId === elem.id).name === "refrigerator") {
            return false;
        }
        return true;
    }

    render(){
        const { setCurrentElement } = this.props;
        const { dispositives } = this.state;
        return dispositives.map(elem =>
            <Dispositive
                dispositive={elem}
                isToggable={this.isToggable(elem)}
                setCurrentDispositive={setCurrentElement}
            />);
    }
}

export default WithMainView(Dispositives, AddDispositiveForm, ConfigureDispositiveForm, "Dispositives");