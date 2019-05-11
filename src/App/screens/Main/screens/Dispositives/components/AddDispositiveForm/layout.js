import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';
import CustomSelect from '../../../../../../components/CustomSelect';
import styles from './styles.module.scss';
import Button from '../../../../../../components/Button';

function AddDispostiveForm({ handleSubmit, invalid, dispositives, rooms, onExit }) {
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <Field 
                name="name"
                label="Dispositive name"
                type="text"
                component={CustomInput}
            />
            <Field
                name="type"
                label="Dispositive type"
                elements={dispositives}
                component={CustomSelect}
            />
            <Field
                name="room"
                label="room"
                elements={rooms}
                component={CustomSelect}
            />
            <div className={`mdl-card__actions mdl-card--border ${styles.buttons}`}>
                <Button type="button" iconType="raised" label={"SALIR"} handleClick={onExit} />
                <Button type="submit" iconType="raised" disable={invalid} label={"ADD"} />
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'add dispositive'
})(AddDispostiveForm);