import React, { useEffect, useState } from "react";
import { ListValidationResults } from "../utils";

function TextField({
  type,
  label,
  name,
  placeholder,
  validationRules,
  onChange,
}) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [validationResults, setValidationResults] = useState(() => {
    return [
      ...validationRules
        .map((rule) => rule(value))
        .flat(2)
        .map((rule) => ({ isValid: null, message: rule.message })),
    ];
  });

  useEffect(() => {
    onChange(name, value, isValid);
  }, [value, isValid]);

  const handleOnChange = (event) => setValue(event.target.value);

  const handleOnBlur = () => {
    const newValidationResults = [
      ...validationRules.map((rule) => rule(value)).flat(2),
    ];
    setValidationResults(
      validationRules
        .map((rule) => rule(value))
        .flat(2)
        .map((rule) => ({ isValid: rule.isValid, message: rule.message }))
    );
    const newIsValid = newValidationResults.every((result) => result.isValid);
    setIsValid(newIsValid);
  };

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder={placeholder}
        className={isValid !== null ? (isValid ? "valid" : "error") : ""}
      />
      <ListValidationResults items={validationResults} />
    </div>
  );
}

export default TextField;
