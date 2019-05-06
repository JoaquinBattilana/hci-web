import React, { Fragment } from 'react'
import CustomSelect from '../../../../../../components/CustomSelect';
import CustomInput from '../../../../../../components/CustomInput';
import { Field } from 'redux-form';

function OvenOptions() {
    return(
        <Fragment>
            <Field 
                name="temperature"
                label="Set temperature"
                type="text"
                component={CustomInput}
            />
            <Field
                name="heat"
                label="Heat mode"
                elements={heatElements}
                component={CustomSelect}
            />
            <Field
                name="grill"
                label="Grill mode"
                elements={grillElements}
                component={CustomSelect}
            />
            <Field
                name="convection"
                label="Convection mode"
                elements={convectionElements}
                component={CustomSelect}
            />
        </Fragment>
    );
}

export default OvenOptions;

const heatElements = [{id:"conventional", name:'conventional'}, {id:"bottom", name:'bottom'}, {id:"top", name:'top'}];
const grillElements = [{id:"large", name:'large'}, {id:"eco", name:'eco'}, {id:"off", name:'off'}];
const convectionElements = [{id:"normal", name:'normal'}, {id:"eco", name:'eco'}, {id:"off", name:'off'}];