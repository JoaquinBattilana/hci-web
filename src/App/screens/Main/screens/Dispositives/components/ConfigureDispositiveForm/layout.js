import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../CustomInput';

function ConfigureDispositiveForm() {
    return(
        <Field
            label="name"
            type="text"
            component={CustomInput}
        />
    );
}

export default reduxForm({
    form: 'configure dispositive'
})(ConfigureDispositiveForm);