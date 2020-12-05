import React from 'react';

import { FormFieldWrapper, InputField, Label } from './styles';

function Input({label, type, name, suggestions}) {

   
    const isTypeTextarea = type === 'textarea';
    const tag = isTypeTextarea ? 'textarea' : 'input';
    const hasSuggestions = Boolean(suggestions.lenght);
    const fieldId = `id_${name}`;

    return (
        <FormFieldWrapper>
            <Label htmlFor={fieldId}>{label}</Label>
            <InputField
             as={tag}
             type={type}
             name={name}
             
             />
        </FormFieldWrapper>
    )
}

export default Input;