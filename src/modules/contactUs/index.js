import React, { useState, useRef, useEffect } from 'react';

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
      <form onSubmit={onSubmit}>
        <input
          ref={inputValue}
          style={{ width: "300px", height: "30px", marginTop: "50px", fontSize: "15px" }}
          value={value}
          onChange={onChange} />
        <button
          style={{ width: "300px", height: "30px", marginTop: "50px", fontSize: "15px" }}
          type="submit">
          Submit
          </button>
      </form>
    </div>
  )
}