import React, { Component } from 'react';
import AddButton from './components/AddButton';
import Dispositive from '../../../../components/Dispositive';
import dispositiveActions from '../../../../../redux/dipositives/actions';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import AddDispositiveFormContainer from './components/AddDispositiveForm';

class Dispositives extends Component {

    componentDidMount = () => {
        const { getDispositives, getDispositivesTypes } = this.props;
        getDispositivesTypes();
        getDispositives();
    }

    render(){
        const { dispositives } = this.props;
        return(
            <div className={styles.dispositivesContainer}>
                {dispositives.map( elem => <Dispositive name={elem.name} />)}
                <AddButton />
                <AddDispositiveFormContainer/>
            </div>
        );
    }
}

const mapStateToProps = ({ dispositives: { dispositivesType, dispositives, isLoading, hasError}}) => ({
    dispositivesType,
    dispositives,
    hasError,
    isLoading
});

const mapDispatchToProps = dispatch => ({
    getDispositivesTypes: () => dispatch(dispositiveActions.getDispositivesTypes()),
    getDispositives: () => dispatch(dispositiveActions.getDispositives()),
    postDispositives: data => dispatch(dispositiveActions.postDispositive(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dispositives);