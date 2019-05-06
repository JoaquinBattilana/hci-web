import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';
import LampOptions from '../LampOptions';

function ConfigureDispositiveForm( {handleSubmit} ) {
    return(
        <form onSubmit={handleSubmit}>
            <h2>Configure Dispositive</h2>
            <Field
                name="name"
                label="name"
                type="text"
                component={CustomInput}
            />
            <LampOptions />
            <button type="submit">OK</button>
        </form>
    );
}

export default reduxForm({
    form: 'configure dispositive'
})(ConfigureDispositiveForm);