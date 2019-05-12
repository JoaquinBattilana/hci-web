import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';
import Button from '../../../../../../components/Button';
import styles from './styles.module.scss'

function AddRoutineForm({ handleSubmit, onExit, invalid }) {
    return(
        <form onSubmit={handleSubmit}>
            <Field 
                name="name"
                label="name"
                type="text"
                component={CustomInput}
            />
            <div className={`mdl-card__actions mdl-card--border ${styles.buttons}`}>
                <Button type="button" iconType="raised" label={"CANCEL"} handleClick={onExit} />
                <Button type="submit" iconType="raised" disable={invalid} label={"ADD"} />
            </div>
        </form>
    );
}

export default reduxForm({
    form: "add routine"
})(AddRoutineForm);