import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import dispositiveActions from '../../../redux/dipositives/actions';
import SwitchButton from '../SwitchButton';
import Button from '../Button';

class Dispositive extends Component {
    componentDidMount = () => {
        window.componentHandler.upgradeAllRegistered();
    }

    onConfigClickHandler = () => {
        const { dispositive, onConfigClick } = this.props
        onConfigClick(dispositive);
    }
    
    onDeleteClickHandler = () => {
        const { dispositive, onDeleteClick } = this.props
        onDeleteClick( dispositive.id );
    }

    render() {
        const { dispositive, isToggable } = this.props; 
        return(
            <div className={styles.dispositive}>
                <div className={styles.icon}> ICONO </div>
                <div className={styles.name}>{dispositive.name}</div>
                {isToggable && <SwitchButton />}
                <Button handleClick={this.onConfigClickHandler} icon="build" iconType="icon" />
                <Button handleClick={this.onDeleteClickHandler} icon="delete" iconType="icon" />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onConfigClick: dispositive => dispatch(dispositiveActions.setCurrentDispositive(dispositive)),
    onDeleteClick: id => dispatch(dispositiveActions.deleteDispositive(id))
});

export default connect(null, mapDispatchToProps)(Dispositive);
