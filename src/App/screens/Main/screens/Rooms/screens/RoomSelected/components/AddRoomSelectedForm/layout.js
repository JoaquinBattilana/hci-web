import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../../../components/CustomInput';
import CustomSelect from '../../../../../../../../components/CustomSelect';
import styles from './styles.module.scss';
import Button from '../../../../../../../../components/Button';
import { isRequired } from '../../../../../../../../../utils/validate';

function AddRoomDispostiveForm({ handleSubmit, invalid, dispositives, onExit }) {
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <Field 
                name="name"
                label="Dispositive name"
                type="text"
                component={CustomInput}
                validate={[isRequired]}
            />
            <Field
                name="type"
                label="Dispositive type"
                elements={dispositives}
                component={CustomSelect}
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
    form: 'add dispositive'
})(AddRoomDispostiveForm);