import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';
import Button from '../../../../../../components/Button';
import styles from './styles.module.scss'
import { isRequired } from '../../../../../../../utils/validate';

function AddRoutineForm({ handleSubmit, onExit, invalid }) {
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <Field 
                name="name"
                label="name"
                type="text"
                component={CustomInput}
                validate={[isRequired]}
            />
            <div className={`mdl-card__actions mdl-card--border ${styles.buttons}`}>
                <Button type="button" icon="cancel" iconType="fab" disable={invalid}  handleClick={onExit}/>
                <Button type="submit" icon="check" iconType="fab" disable={invalid} />
            </div>
        </form>
    );
}

export default reduxForm({
    form: "add routine"
})(AddRoutineForm);