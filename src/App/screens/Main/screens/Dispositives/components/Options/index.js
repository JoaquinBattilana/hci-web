import React, { Component } from 'react';
import { Field } from 'redux-form';
import CustomInput from '../../../../../../components/CustomInput';
import CustomSelect from '../../../../../../components/CustomSelect';
import Button from '../../../../../../components/Button';
import SliderInput from '../../../../../../components/SliderInput';

class Options extends Component {
    render() {
        const { actions, dispositiveId, executeButtonAction } = this.props;
        if(!actions){
            return null;
        }
        return actions.map(action =>{
            if(action.name==="getState"){
                return;
            }
            if(action.params.length===0){
                return(
                    <Button label={action.name} handleClick={() => executeButtonAction(dispositiveId,action.name)} />
                );
            }
            return action.params.map(param => {
                if( (param.type === "string" ||
                    param.type === "number") && 
                    !param.supportedValues){
                        if(param.minValue!==undefined){
                            return(
                                <Field
                                    name={param.name}
                                    component={SliderInput}
                                    min={parseInt(param.minValue)}
                                    max={parseInt(param.maxValue)}
                                />
                            );
                        } else{
                            return(
                                <Field
                                    name={param.name}
                                    label={param.name}
                                    component={CustomInput}
                                />
                            );
                        }
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