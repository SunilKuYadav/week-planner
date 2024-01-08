import React, { useState } from "react";
import styled from "styled-components";

import { InputFieldProps } from "../../pages/month/types";

interface InputFieldType {
  data: InputFieldProps;
  handleSaveValue: (text: InputFieldProps) => void;
}

const InputField = (props: InputFieldType) => {
  const { title, type, value } = props.data;

  const [text, setText] = useState(value);

  const handleSave = () => {
    if (title !== text) {
      props.handleSaveValue({ title, type, value: text });
    }
  };

  return (
    <Container>
      <Label>{title}</Label>
      <Input
        type={type}
        value={text}
        onChange={(_) => setText(_.target.value)}
        onBlur={handleSave}
      />
    </Container>
  );
};

export default InputField;

const Container = styled.div``;
const Label = styled.label`
  margin-right: 5px;
`;
const Input = styled.input`
  border: none;
  border-bottom: 3px solid darkgrey;
  background: none;
  outline: none;
  width: 80%;
  height: 24px;
`;
