import React, { Component, Fragment } from 'react';
import Dispositive from '../../../../components/Dispositive';
import dispositiveActions from '../../../../../redux/dipositives/actions';
import { connect } from 'react-redux';
import Button from '../../../../components/Button';
import styles from './styles.module.scss';
import ConfigureDispositiveForm from './components/ConfigureDispositiveForm';
import AddDispositiveForm from './components/AddDispositiveForm';
import { DEVICES_ICONS } from '../../../../../constants/devices';

class Dispositives extends Component {

    state = {
        addFormOpen: false,
        currentDispositive: null
    }
    
    componentDidMount = () => {
        const { getDispositives, getDispositivesTypes } = this.props;
        getDispositivesTypes();
        getDispositives();
    }

    toggleAddForm = () => {
        this.setState(state => ({
            addFormOpen: !state.addFormOpen
        }));
    }

    setCurrentDispositive = dispositive => {
        this.setState({
            currentDispositive: dispositive
        });
    }

    isToggable = dispositive => {
        const { dispositivesType } = this.props;
        if(!dispositivesType && dispositivesType.find(elem => dispositive.typeId === elem.id).name === "refrigerator") {
            return false;
        }
        return true;
    }

    getIcon = dispositive => {
        const { dispositivesType } = this.props;
        if(!dispositivesType && dispositivesType.find(elem => dispositive.typeId === elem.id).name === "lamp") {
            return DEVICES_ICONS['lamp'];
        }
    }

    render(){
        const { dispositives, isLoading, getDispositives } = this.props;
        const { addFormOpen, currentDispositive } = this.state;
        return(
            <div className={styles.dispositivesLayout}>
                <h2 className={styles.title}>Dispositives</h2>
                {isLoading ? "LOADING" : 
                    dispositives.map( elem =>
                        <Dispositive 
                            dispositive={elem}
                            isToggable={this.isToggable(elem)}
                            icon={this.getIcon(elem)}
                            setCurrentDispositive={this.setCurrentDispositive}
                        />
                    )
                }
                <Button icon="add" iconType="fab" handleClick={this.toggleAddForm} />
                {addFormOpen && <AddDispositiveForm title="Agregar dispositivo" onExit={this.toggleAddForm}/> }
                {currentDispositive &&
                <ConfigureDispositiveForm
                    title="Configurar dispositivo"
                    setCurrentDispositive={this.setCurrentDispositive}
                    currentDispositive={currentDispositive}
                />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ dispositives: { dispositivesType, dispositives, isLoading, hasError}}) => ({
    dispositivesType,
    dispositives,
    hasError,
    isLoading,
});

const mapDispatchToProps = dispatch => ({
    getDispositivesTypes: () => dispatch(dispositiveActions.getDispositivesTypes()),
    getDispositives: () => dispatch(dispositiveActions.getDispositives()),
    postDispositives: data => dispatch(dispositiveActions.postDispositive(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dispositives);