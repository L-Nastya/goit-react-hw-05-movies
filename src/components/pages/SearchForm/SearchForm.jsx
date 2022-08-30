import { React } from "react";
import { useState } from "react";
import styled from "styled-components";


const SearchForm = ({onSubmit}) => {
  const [text, setText] = useState("");
  

  const textInput = (e) => {
    const { value } = e.target;
    setText(value);
  }


  const textSubmit = event => {
    event.preventDefault();

    onSubmit(text);
    setText('');
  };


  return (
  <Form onSubmit ={textSubmit}>
    <FormInput
      type="text"
      value={text}
      onChange={textInput}
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
    />
    <FormButton type="submit">Search</FormButton>          
  </Form>
        )
    }

export default SearchForm;

const Form = styled.form`
  margin-left: 30px;
  margin-bottom: 22px;
  display: flex;
  justify-content: center;
`;

const FormInput = styled.input`
  width: 25%;
  margin-right: 10px;
  border-radius: 2px;
`;

const FormButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color:  #ff8397;
  font-size: 18px;
  cursor: pointer;
  :hover{
    background-color: #51bbe1;
  }
`