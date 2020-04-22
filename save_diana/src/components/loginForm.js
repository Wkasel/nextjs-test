import React, { Component } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const CustomInput = ({ fieldType, ...others }) => {
  return (
    <div>
      <Input
        type={fieldType}
        {...others} />
      <ValidationMessage {...others} />
    </div>
  );
};

const CustomDropDown = ({ options, ...others }) => {
  return (
    <div>
      <DropDownList
        data={options}
        {...others} />
      <ValidationMessage {...others} />
    </div>
  )
}

const CustomCheckbox = ({ ...props }) => {
  return (
    <div>
      <Checkbox {...props} />
      <ValidationMessage {...props} />
    </div>
  );
};

const ValidationMessage = ({ valid, visited, validationMessage }) => {
  return (
    <>
    { !valid && visited &&
        (<div className="required">{validationMessage}</div>)}
    </>
  );
}

const emailValidator = (value) => (
  new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email."
);
const requiredValidator = (value) => {
  return value ? "" : "This field is required";
}

export default function LoginForm() {
  const handleSubmit = (data) => {
    console.log(`
      Email: ${data.email}
      Password: ${data.password}
      Accepted Terms: ${data.acceptedTerms}
    `);
    
    event.preventDefault();
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.onSubmit}>
          <h1>Create Account</h1>

          <Field
            label="Email"
            name="email"
            fieldType="email"
            component={CustomInput}
            validator={[requiredValidator, emailValidator]} />
          
          <Field
            label="Password"
            name="password"
            fieldType="password"
            component={CustomInput}
            validator={requiredValidator} />

          <Field
            label="I accept the terms of service"
            name="acceptedTerms"
            component={CustomCheckbox}
            validator={requiredValidator} />

          <button disabled={!formRenderProps.allowSubmit}>
            Submit
          </button>
        </form>
      )}>
    </Form>
  );
}
