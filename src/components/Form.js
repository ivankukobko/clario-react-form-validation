import React, { useState } from "react";
import TextField from "./TextField";
import { isValidEmail, isValidPassword } from "../utils";

function Form() {
  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = Object.values(formData).every((field) => field.isValid);
    setIsFormValid(isValid);

    if (isFormValid) {
      alert("Submitted successfully");
    }
  };

  const handleInputChange = (name, value, isValid) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { value, isValid },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Email"
        name="email"
        validationRules={[isValidEmail]}
        onChange={handleInputChange}
      />
      <TextField
        type="password"
        placeholder="Create your password"
        name="password"
        validationRules={[isValidPassword]}
        onChange={handleInputChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Form;
