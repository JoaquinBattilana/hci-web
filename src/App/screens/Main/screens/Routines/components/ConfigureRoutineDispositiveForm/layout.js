import React from 'react';
import { reduxForm } from 'redux-form';
import Button from '../../../../../../components/Button';
import styles from './styles.module.scss';
import Options from '../../../Dispositives/components/Options';

function ConfigureDispositiveForm({ dispositiveId, handleSubmit, actions, onExit, invalid }) {
    return(
        <form  className={styles.form} onSubmit={handleSubmit}>
            <Options actions={actions}  dispositiveId={dispositiveId} />
            <div className={`mdl-card__actions mdl-card--border ${styles.buttons}`}>
                <Button type="button" iconType="raised" label={"SALIR"} handleClick={onExit} />
                <Button type="submit" iconType="raised" disable={invalid} label={"ADD"} />
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'configure dispositive',
    enableReinitialize: true
})(ConfigureDispositiveForm);