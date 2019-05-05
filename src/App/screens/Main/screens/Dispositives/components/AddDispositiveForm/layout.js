import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../CustomInput';

function AddDispostiveForm({ handleSubmit, invalid }) {
    return(
        <form onSubmit={handleSubmit}>
            <h2> Add Dispositive </h2>
            <Field 
                name="name"
                label="Dispositive name"
                type="text"
                component={CustomInput}
            />
            <button type="submit" disable={invalid}>
                Agregar
            </button>
        </form>
    );
}

export default reduxForm({
    form: 'add dispositive'
})(AddDispostiveForm);