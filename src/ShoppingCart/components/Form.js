import React from "react";
import InputField from "./InputField.js";

export default function Form(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <InputField
        fieldName="Product"
        fieldInput={props.productName}
        setName={props.setProductName}
      />

      <InputField
        fieldName="Description"
        fieldInput={props.productDescription}
        setName={props.setProductDescription}
      />
      <div className="form-footer">
        <div className="validation-message">{props.validationMsg}</div>
        <input type="submit" className="btn btn-primary" value="Add product" />
      </div>
    </form>
  );
}
