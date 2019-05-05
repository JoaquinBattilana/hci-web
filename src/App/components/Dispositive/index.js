import React, { Component } from 'react';
import styles from './styles.module.scss';
import Button from '../Button';
import { connect } from 'react-redux';
import dispositiveActions from '../../../redux/dipositives/actions';

class Dispositive extends Component {
    onConfigClickHandler = () => {
        const { dispositive, onConfigClick } = this.props
        onConfigClick(dispositive);
    }

    render() {
        const { dispositive } = this.props; 
        return(
            <div className={styles.dispositive}>
                <div className={styles.icon}> ICONO </div>
                <div className={styles.name}>{dispositive.name}</div>
                <Button label="Prender/Apagar"/>
                <Button handleClick={this.onConfigClickHandler}label="Configuracion"/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onConfigClick: dispositive => dispatch(dispositiveActions.setCurrentDispositive(dispositive))
});

export default connect(null, mapDispatchToProps)(Dispositive);
