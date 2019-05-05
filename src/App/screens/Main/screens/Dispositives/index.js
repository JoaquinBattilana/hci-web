import React, { Component } from 'react';
import AddButton from './components/AddButton';
import Dispositive from '../../../../components/Dispositive';
import devices from '../../../../../services/DevicesService';

import styles from './styles.module.scss';

class Dispositives extends Component {
    state = {
        dispositives: []
    }

    setDispositives = async () => {
        const response = await devices.getDevices();
        debugger;
        if(response.ok){
            this.setState({
                dispositives: response.data.devices
            });
        }
    }

    componentDidMount = () => {
        this.setDispositives();
    }

    render(){
        return(
            <div className={styles.dispositives}>
                {this.state.dispositives.map( elem => <Dispositive name={elem.name} />)}
                <AddButton />
            </div>
        );
    }
}

export default Dispositives;