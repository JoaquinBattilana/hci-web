import React, { Fragment } from 'react'
import CustomSelect from '../../../../../../components/CustomSelect';
import CustomInput from '../../../../../../components/CustomInput';
import { Field } from 'redux-form';

function AcOptions() {
    return(
        <Fragment>
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
            <Field
                name="verticalSwing"
                label="Set vertical swing"
                elements={verticalSwingElements}
                component={CustomSelect}
                initialValue={verticalSwingElements[0]}
            />
            <Field
                name="horizontalSwing"
                label="Set Horizontal Swing"
                elements={horizontalSwingElements}
                component={CustomSelect}
            />
            <Field
                name="fanSpeed"
                label="Set Fan Speed"
                elements={fanSpeedElements}
                component={CustomSelect}
            />
        </Fragment>
    );
}

const modeElements = [{id:"cool", name:'cool'}, {id:"heat", name:'heat'}, {id:"fan", name:"fan"}];
const verticalSwingElements = [{id:"auto", name:'auto'}, {id:22, name: 22}, {id:45, name:45}];
const horizontalSwingElements = [{id:"auto", name:'auto'}, {id:-90, name:-90}, {id:-45, name:-45}, {id:0, name:0}, {id:45, name:45}, {id:90, name:90}];
const fanSpeedElements = [{id:"auto", name:'auto'}, {id:-25, name:25}, {id:50, name:50}, {id:75, name:75}, {id:100, name:100} ];

export default AcOptions;