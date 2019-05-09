import React, { Fragment } from 'react';

function CustomInput({ label, input, type }) {
    return(
        <Fragment>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input {...input} class="mdl-textfield__input" type={type} />
                <label class="mdl-textfield__label">{label}</label>
            </div>
        </Fragment>
    );
}

export default CustomInput;