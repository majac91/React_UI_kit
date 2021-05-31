import React from "react";

export default function InputField(props) {
  return (
    <div>
      <label htmlFor={props.fieldName}>{props.fieldName}</label>
      <input
        id="name"
        value={props.fieldInput}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        placeholder={`Enter the ${props.fieldName.toLowerCase()}`}
        className="textfield"
      />
    </div>
  );
}
