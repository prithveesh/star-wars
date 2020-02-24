import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useMouse from '../../hoc/useMouse';

import './styles.css';

const Button = styled.button`
  width: 300px;
  height: 30px;
  margin-top: 50px;
  font-size: 15px;
`;

function ContactUs(props) {
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

  const { cordinates } = props;

  return (
    <div>
      <p>Mouse position is X: {cordinates.x} Y: {cordinates.y}</p>
      <form
        className="form"
        onSubmit={onSubmit}>
        <input
          ref={inputValue}
          value={value}
          onChange={onChange} />
        <Button
          type="submit">
          Submit
          </Button>
      </form>
      <style jsx>{`
        input {
          width: 300px;
          height: 30px;
          margin-top: 50px;
          font-size: 15px;
        }
      `}</style>
    </div>
  )
}

export default useMouse(ContactUs);