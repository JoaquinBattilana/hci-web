import React, { Fragment } from 'react'
import CustomInput from '../../../../../../components/CustomInput';
import { Field } from 'redux-form';

function LampOptions() {
    return(
        <Fragment>
            <Field 
                name="brightness"
                label="brightness"
                type="text"
                component={CustomInput}
            />
            <Field
                name="color"
                label="Color"
                type="text"
                component={CustomInput}
            />
        </Fragment>
    );
}

export default LampOptions;