import React, { Fragment } from 'react'
import CustomSelect from '../../../../../../components/CustomSelect';
import CustomInput from '../../../../../../components/CustomInput';
import { Field } from 'redux-form';

function RefrigeratorOptions() {
    return(
        <Fragment>
            <Field 
                name="freezerTemperature"
                label="Set freezer temperature"
                type="text"
                component={CustomInput}
            />
            <Field
                name="temperature"
                label="Set temperature"
                type="text"
                component={CustomInput}
            />
            <Field
                name="mode"
                label="Set mode"
                elements={modeElements}
                component={CustomSelect}
            />
        </Fragment>
    );
}

export default RefrigeratorOptions;

const modeElements = [{id:"default", name:'default'}, {id:"vacations", name:'vacations'}, {id:"party", name:'party'}];