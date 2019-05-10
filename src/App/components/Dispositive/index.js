import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import dispositiveActions from '../../../redux/dipositives/actions';
import SwitchButton from '../SwitchButton';
import Button from '../Button';
import { DEVICES_ICONS } from '../../../constants/devices';

class Dispositive extends Component {
    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    onConfigClickHandler = () => {
        const { dispositive, setCurrentDispositive } = this.props
        setCurrentDispositive(dispositive);
    }
    
    onDeleteClickHandler = () => {
        const { dispositive, onDeleteClick } = this.props
        onDeleteClick( dispositive.id );
    }

    render() {
        const { dispositive, isToggable } = this.props; 
        return(
            <div className={`mdl-data-table__cell--non-numeric ${styles.dispositive}`}>
                <i className={`material-icons ${styles.icon}`}>highlight</i>
                <div className={styles.name}>{dispositive.name}</div>
                {isToggable && <SwitchButton className={styles.switch} />}
                <Button handleClick={this.onConfigClickHandler} icon="build" iconType="icon" />
                <Button handleClick={this.onDeleteClickHandler} icon="delete" iconType="icon" />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onDeleteClick: id => dispatch(dispositiveActions.deleteDispositive(id))
});

export default connect(null, mapDispatchToProps)(Dispositive);
