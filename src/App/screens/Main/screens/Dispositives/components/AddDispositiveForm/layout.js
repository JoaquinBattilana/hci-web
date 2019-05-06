import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';
import CustomSelect from '../../../../../../components/CustomSelect';

function AddDispostiveForm({ handleSubmit, invalid, dispositives, rooms }) {
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
                elements={dispositives}
                component={CustomSelect}
            />
            <Field
                name="room"
                label="room"
                elements={rooms}
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