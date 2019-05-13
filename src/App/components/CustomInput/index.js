import styles from './styles.module.scss';
import React from 'react';

function CustomInput({ label, input, type, meta: {error, touched} }) {
    return(
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input {...input} class="mdl-textfield__input" type={type} />
            <label class="mdl-textfield__label">{label}</label>
            {error && touched && <span className={styles.error}>{error}</span>}
        </div>
    );
}

export default CustomInput;