import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../CustomInput';

function ConfigureDispositiveForm( {handleSubmit} ) {
    return(
        <form onSubmit={handleSubmit}>
            <Field
            label="name"
            type="text"
            component={CustomInput}
            />
            <button type="submit">OK</button>
        </form>
    );
}

export default reduxForm({
    form: 'configure dispositive'
})(ConfigureDispositiveForm);