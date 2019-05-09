import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';
// import styles from './styles.module.scss';

function ConfigureDispositiveForm({ handleSubmit, options: Options, actions, initialState }) {
    debugger;
    return(
        <form  onSubmit={handleSubmit}>
            <h2>Configure Dispositive</h2>
            <Field
                name="name"
                label="name"
                type="text"
                component={CustomInput}
            />
            <Options actions={actions} initialState={initialState}/>
            <button type="submit">OK</button>
        </form>
    );
}

export default reduxForm({
    form: 'configure dispositive'
})(ConfigureDispositiveForm);