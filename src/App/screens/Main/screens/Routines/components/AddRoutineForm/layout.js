import React from 'react';
import { Field, reduxForm } from 'redux-form';

function AddRoutineForm() {
    return(<h1>hola</h1>);
}

export default reduxForm({
    form: "add routine"
})(AddRoutineForm);