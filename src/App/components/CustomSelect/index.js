import React, { Fragment } from 'react';
import styles from './styles.module.scss'

function CustomSelect({ label, input, elements, meta: {error, touched} }) {
    return(
        <Fragment>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <select {...input} className="mdl-textfield__input">
                <option></option>
                {elements && elements.map(elem => <option value={elem.id}>{elem.name}</option>)}
            </select>
            <label className="mdl-textfield__label">{label}</label>
            {error && touched && <span className={styles.error}>{error}</span>}
        </div>
        </Fragment>
    );
}

export default CustomSelect;