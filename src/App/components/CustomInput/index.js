import React, { Fragment } from 'react';

function CustomInput({ label, input, type }) {
    return(
        <Fragment>
            <label className="mdl-textfield__label">{label}</label>
            <input className="mdl-textfield__input"
                {...input}
                type={type}
            />
        </Fragment>
    );
}

export default CustomInput;