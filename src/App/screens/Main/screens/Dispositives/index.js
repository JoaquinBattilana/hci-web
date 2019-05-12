import React, { Component, Fragment } from 'react';
import Dispositive from '../../../../components/Dispositive';
import dispositiveActions from '../../../../../redux/dipositives/actions';
import { connect } from 'react-redux';
import { DEVICES_ICONS } from '../../../../../constants/devices';

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

    getIcon = dispositive => {
        const { dispositivesType } = this.props;
        if(!dispositivesType && dispositivesType.find(elem => dispositive.typeId === elem.id).name === "lamp") {
            return DEVICES_ICONS['lamp'];
        }
    }

    render(){
        const { dispositives, setCurrentElement } = this.props;
        debugger;
        return dispositives.map(elem =>
            <Dispositive
                dispositive={elem}
                isToggable={this.isToggable(elem)}
                icon={this.getIcon(elem)}
                setCurrentDispositive={setCurrentElement}
            />);
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
    getDispositives: () => dispatch(dispositiveActions.getDispositives())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dispositives);