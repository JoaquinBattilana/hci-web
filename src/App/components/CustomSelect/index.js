import React, { Fragment } from 'react';

function CustomSelect({ label, input, elements }) {
    return(
        <Fragment>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <select {...input} className="mdl-textfield__input">
                <option></option>
                {elements && elements.map(elem => <option value={elem.id}>{elem.name}</option>)}
            </select>
            <label className="mdl-textfield__label">{label}</label>
        </div>
        </Fragment>
    );
}

export default CustomSelect;