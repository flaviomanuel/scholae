import styled,{css} from 'styled-components';


export const LabelInput = styled.label`
  color: black;
  font-weight: bold;
  
  font-size: 1.6rem;
`;

export const LabelCheckBox = styled.label`
  color: black;
  
  font-size: 1.6rem;
  margin-left: 1rem;
  max-width: 8rem;

  @media(max-width: 295px) {
margin: 0 0 1rem 0;
}
`;

export const FormFieldWrapper = styled.div`
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }

    /* margin: 3rem;
    display: flex;
    flex-direction: column; */

  margin-bottom: 3rem;

 
`;



export const InputField = styled.input`
  background: white;
  color: #333333;
  display: block;
  width: 100%;
  height: 4.5rem;
  font-size: 1.5rem;
  
  outline: 0;
  border: 1px solid #bbbbbb;
  
  padding: 1.2rem 1.2rem;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom: 4px solid var(--color-yellow-main);
  }

  /* margin: 0 auto; */
  ${ ({isCheckBox}) => (isCheckBox ? css`

  display: inline;
  width: 2rem;
  height: 2rem;
  ` : '') }
`;

export const CheckBox = styled.div`

display: flex;
align-items: center;
margin: 1.4rem;


@media(max-width: 365px) {
  margin: 0 0 1rem 0;

}
`;

export const CheckBoxContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);

justify-items: center;

@media(max-width: 510px) {
display: grid;

  grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
 margin: 0;
}

`;