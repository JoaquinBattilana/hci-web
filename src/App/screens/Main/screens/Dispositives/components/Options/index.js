import React, { Component } from 'react';
import { Field } from 'redux-form';
import Button from '../../../../../../components/Button';
import CustomInput from '../../../../../../components/CustomInput';
import CustomSelect from '../../../../../../components/CustomSelect';
import SwitchButton from '../../../../../../components/SwitchButton';

class Options extends Component {
    render() {
        const { actions } = this.props;
        if(!actions){
            return null;
        }
        debugger;
        return actions.map(action =>{
            if(action.params.length===0){
                return <SwitchButton label={action.name} />
            }
            return action.params.map(param => {
                if( (param.type === "string" ||
                    param.type === "number") && 
                    !param.supportedValues){
                        return(
                            <Field
                                name={param.name}
                                label={param.name}
                                component={CustomInput}
                            />
                        );
                } else if(param.supportedValues){
                    const wrappedElements = param.supportedValues.map( elem => {
                        return {
                            id: elem,
                            name: elem
                        };
                    });
                    return(
                        <Field 
                            name={param.name}
                            label={param.name}
                            elements={wrappedElements}
                            component={CustomSelect}
                        />
                    );
                }
            })
        });
    }
}

export default Options