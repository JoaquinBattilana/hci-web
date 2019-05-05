import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../CustomInput';
import CustomSelect from '../CustomSelect';

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
            <Field
                name="type"
                label="Dispositive type"
                component={CustomSelect} 
            />
            <button type="submit" disable={invalid}>
                Add
            </button>
        </form>
    );
}

export default reduxForm({
    form: 'add dispositive'
})(AddDispostiveForm);