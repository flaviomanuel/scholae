import React from 'react';

import { FormFieldWrapper, InputField, LabelInput, LabelCheckBox, CheckBox, CheckBoxContainer } from './styles';

function Input({label, type, name, suggestions, onChange, value, onClick, required}) {

   
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
                {suggestions.map(suggestion =>  {
                    return (
                    
                    <CheckBox>
                        <InputField
                            key={suggestion.id}    
                            as={tag}
                            type={type}
                            name={name}
                            onChange={onChange}
                            value={parseInt(suggestion.id)}
                            isCheckBox={isCheckBox}
                            onClick={onClick}
                            required={required}
                        />
                
                        <LabelCheckBox htmlFor={name}>{suggestion.name}</LabelCheckBox>
                     </CheckBox>
                ) } )}
                </CheckBoxContainer>

            ) : ( 
                <>
                <InputField
                as={tag}
                type={type}
                name={name}
                id={name}
                isCheckBox={isCheckBox}
                onChange={onChange}
                value={value}
                autoComplete={hasSuggestions ? 'off' : 'on'}
                required={required}
                />
               
                </>
            )
             }
            
        </FormFieldWrapper>

        
    )
}

export default Input;