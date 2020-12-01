import React from 'react';

import { FormFieldWrapper, Input, Label } from './styles';

function Text({label, type, name, suggestions}) {

   
    const isTypeTextarea = type === 'textarea';
    const tag = isTypeTextarea ? 'textarea' : 'input';
    const hasSuggestions = Boolean(suggestions.lenght);
    const fieldId = `id_${name}`;

    return (
        <FormFieldWrapper>
            <Label htmlFor={fieldId}>{label}</Label>
            <Input
             as={tag}
             type={type}
             name={name}
             
             />
        </FormFieldWrapper>
    )
}

export default {
    Text,
};