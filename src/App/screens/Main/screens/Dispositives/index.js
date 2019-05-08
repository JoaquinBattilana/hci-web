import React, { Component } from 'react';
import Dispositive from '../../../../components/Dispositive';
import dispositiveActions from '../../../../../redux/dipositives/actions';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import AddDispositiveFormContainer from './components/AddDispositiveForm';
import ConfigureDispositiveFormContainer from './components/ConfigureDispositiveForm';

class Dispositives extends Component {
    
    componentDidMount = () => {
        const { getDispositives, getDispositivesTypes } = this.props;
        getDispositivesTypes();
        getDispositives();
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
        return(
            <div className={styles.dispositivesContainer}>
                {dispositives.map( elem => <Dispositive dispositive={elem} isToggable={this.isToggable(elem)} />)}
                <AddDispositiveFormContainer/>
                {currentDispositive && <ConfigureDispositiveFormContainer />}
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