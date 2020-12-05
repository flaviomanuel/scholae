import styled from 'styled-components';


export const Label = styled.label`
  color: black;
  margin-bottom: 1rem;

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

`;
