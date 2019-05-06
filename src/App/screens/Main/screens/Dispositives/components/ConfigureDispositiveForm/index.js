import React, { Component } from 'react';
import ConfigureDispositiveForm from './layout';
import { connect } from 'react-redux';
import dispositiveActions from '../../../../../../../redux/dipositives/actions';
import OvenOptions from '../OvenOptions';
import LampOptions from '../LampOptions';
import AcOptions from '../AcOptions';
import DoorOptions from '../DoorOptions';

class ConfigureDispositiveFormContainer extends Component {
    getDispositiveOptions = () => {
        const { currentDispositive, dispositivesType } = this.props;
        const dispositiveName = dispositivesType.find(elem => currentDispositive.typeId === elem.id).name;
        switch(dispositiveName) {
            case "lamp":
                return <LampOptions />
            case "oven":
                return <OvenOptions />
            case "ac": 
                return <AcOptions />
            case "door":
                return <DoorOptions />
            default:
                return null;
        }
    }

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
        return <ConfigureDispositiveForm onSubmit={this.handleSubmit} options={this.getDispositiveOptions()}/>;
    }
}

const mapStateToProps = ({ dispositives: { currentDispositive, dispositivesType } }) => ({
    currentDispositive,
    dispositivesType
});

const mapDispatchToProps = dispatch => ({
    putDevice: (deviceId, data) => dispatch(dispositiveActions.putDispositive(deviceId,data)),
}); 
export default connect(mapStateToProps, mapDispatchToProps)(ConfigureDispositiveFormContainer);