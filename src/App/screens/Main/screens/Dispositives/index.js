import React, { Component } from 'react';
import AddButton from './components/AddButton';
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

    render(){
        const { dispositives, currentDispositive } = this.props;
        return(
            <div className={styles.dispositivesContainer}>
                {dispositives.map( elem => <Dispositive name={elem.name} dispositive={elem} />)}
                <AddButton />
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