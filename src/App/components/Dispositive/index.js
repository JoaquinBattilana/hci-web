import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../Button';
import { connect } from 'react-redux';
import dispositiveActions from '../../../redux/dipositives/actions';
import SwitchButton from '../SwitchButton';

class Dispositive extends Component {
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
                <Button handleClick={this.onConfigClickHandler} label="Configuracion"/>
                <Button handleClick={this.onDeleteClickHandler} label="BORRAR"/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onConfigClick: dispositive => dispatch(dispositiveActions.setCurrentDispositive(dispositive)),
    onDeleteClick: id => dispatch(dispositiveActions.deleteDispositive(id))
});

export default connect(null, mapDispatchToProps)(Dispositive);
