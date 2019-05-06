import React, { Fragment } from 'react'
import CustomInput from '../../../../../../components/CustomInput';
import { Field } from 'redux-form';

function LampOptions() {
    return(
        <Fragment>
            <Field 
                name="intensity"
                label="Intensity"
                type="text"
                component={CustomInput}
            />
        </Fragment>
    );
}

export default LampOptions;