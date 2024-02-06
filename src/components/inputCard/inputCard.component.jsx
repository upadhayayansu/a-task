import { useState } from "react";
import propTypes from "prop-types";
import "./inputCard.css";

export const InputCard = ({ onAdd }) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className='box'>
      <div className='input_text'>
        <input
          type='text'
          id='Title'
          onChange={(e) => setInputVal(e.target.value)}
          placeholder='Enter a Title'
        />
        <button
          className='button_class'
          onClick={() => {
            onAdd(inputVal);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
InputCard.propTypes = {
  onAdd: propTypes.string,
};
