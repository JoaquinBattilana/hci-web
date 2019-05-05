import React, { Fragment } from 'react';
import DEVICES from '../../../../../../../constants/devices';

function CustomSelect({ label, input }) {
    return(
        <Fragment>
            <label>{label}</label>
            <select {...input} >
                {DEVICES.map(elem => <option value={elem.id}>{elem.name}</option>)}
            </select>
        </Fragment>
    );
}

export default CustomSelect;