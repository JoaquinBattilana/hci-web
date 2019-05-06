import React, { Fragment } from 'react';

function CustomSelect({ label, input, elements }) {
    return(
        <Fragment>
            <label>{label}</label>
            <select {...input} >
                {elements && elements.map(elem => <option value={elem.id}>{elem.name}</option>)}
            </select>
        </Fragment>
    );
}

export default CustomSelect;