import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// import './styles.css';

const Form = styled.form`
  input, button {
    width: 300px;
    height: 30px;
    margin-top: 50px;
    font-size: 15px;
  }
`;

export default function () {
  const [value, setValue] = useState(null);
  const inputValue = useRef();

  useEffect(() => {
    inputValue.current.value = 'Default Value';
  }, []);

  const onChange = (event) => {
    // const newValue = event.target.value;
    // setValue(newValue.toUpperCase());
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue.current.value);
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input
          ref={inputValue}
          value={value}
          onChange={onChange} />
        <button
          type="submit">
          Submit
          </button>
      </Form>
    </div>
  )
}