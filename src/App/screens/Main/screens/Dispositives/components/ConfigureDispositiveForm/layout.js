import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';
import Button from '../../../../../../components/Button';
import styles from './styles.module.scss';
import Options from '../Options';

function ConfigureDispositiveForm({ dispositiveId, handleSubmit, actions, initialState, onExit, invalid, executeButtonAction }) {
    return(
        <form  className={styles.form} onSubmit={handleSubmit}>
            <Field
                name="name"
                label="name"
                type="text"
                component={CustomInput}
            />
            <Options actions={actions} initialState={initialState} executeButtonAction={executeButtonAction} dispositiveId={dispositiveId} />
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