import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';

function AddRoomForm({ handleSubmit, invalid }) {
    return(
        <form onSubmit={handleSubmit}>
            <h2> Add Dispositive </h2>
            <Field 
                name="name"
                label="Room name"
                type="text"
                component={CustomInput}
            />
            <button type="submit" disable={invalid}>
                Add
            </button>
        </form>
    );
}

export default reduxForm({
    form: 'add room'
})(AddRoomForm);