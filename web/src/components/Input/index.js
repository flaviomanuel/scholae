import React from 'react';

import { FormFieldWrapper, InputField, LabelInput, LabelCheckBox, CheckBox, CheckBoxContainer } from './styles';

function Input({label, type, name, suggestions}) {

   
    const isTypeTextarea = type === 'textarea';
    const tag = isTypeTextarea ? 'textarea' : 'input';
    const isCheckBox = type === 'checkbox';
    const hasSuggestions = Boolean(suggestions.length);
    const fieldId = `id_${name}`;
    

    return (
        <FormFieldWrapper isCheckBox>

            <LabelInput  htmlFor={fieldId}>{label}</LabelInput>
            
            {hasSuggestions ? (
                <CheckBoxContainer>
                {suggestions.map(suggestion =>  (
                    
                    <CheckBox>
                        <InputField
                        as={tag}
                        type={type}
                        name={name}
                        
                        isCheckBox={isCheckBox}
                        
                    //  list={`suggestionsFor${name}`}
                        />
                
                        <LabelCheckBox htmlFor={name}>{suggestion}</LabelCheckBox>
                     </CheckBox>
                )  )}
                </CheckBoxContainer>

            ) : ( 
                <>
                <InputField
                as={tag}
                type={type}
                name={name}
                id={name}
                isCheckBox={isCheckBox}
                autoComplete={hasSuggestions ? 'off' : 'on'}
               //  list={`suggestionsFor${name}`}
                />
               
                </>
            )
             }
            
        </FormFieldWrapper>

        
    )
}

export default Input;