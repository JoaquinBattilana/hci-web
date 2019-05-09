import React, { Component, Fragment } from 'react';
import Dispositive from '../../../../components/Dispositive';
import dispositiveActions from '../../../../../redux/dipositives/actions';
import { connect } from 'react-redux';
import Button from '../../../../components/Button';
import Popup from 'reactjs-popup';

import styles from './styles.module.scss';
import AddDispositiveFormContainer from './components/AddDispositiveForm';
import ConfigureDispositiveFormContainer from './components/ConfigureDispositiveForm';
import AddDispositiveForm from './components/AddDispositiveForm';

class Dispositives extends Component {

    state = {
        addFormOpen: false
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
    isToggable = dispositive => {
        const { dispositivesType } = this.props;
        if(!dispositivesType && dispositivesType.find(elem => dispositive.typeId === elem.id).name === "refrigerator") {
            return false;
        }
        return true;
    }

    render(){
        const { dispositives, currentDispositive } = this.props;
        const { addFormOpen } = this.state;
        return(
            <div className={styles.dispositivesLayout}>
                {dispositives.map( elem => <Dispositive dispositive={elem} isToggable={this.isToggable(elem)} />)}
                <Popup trigger={<Button icon="add" circle={true} handleClick={this.toggleAddForm} />}
                    open={addFormOpen}
                    position="center">
                    <AddDispositiveForm />
                </Popup>
            </div>
        );
    }
}

const mapStateToProps = ({ dispositives: { currentDispositive, dispositivesType, dispositives, isLoading, hasError}}) => ({
    dispositivesType,
    dispositives,
    hasError,
    isLoading,
    currentDispositive
});

const mapDispatchToProps = dispatch => ({
    getDispositivesTypes: () => dispatch(dispositiveActions.getDispositivesTypes()),
    getDispositives: () => dispatch(dispositiveActions.getDispositives()),
    postDispositives: data => dispatch(dispositiveActions.postDispositive(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dispositives);