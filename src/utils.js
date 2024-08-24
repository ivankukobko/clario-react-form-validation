
export const ListValidationResults = ({ items = [] }) => {
  return (
    items.length > 0 && (
      <ul>
        {items.map(({ isValid, message }, index) => {
          const type =
            isValid === null ? "regular" : isValid ? "success" : "error";
          return (
            <li className={`${type}-message`} key={`${type}-messages-${index}`}>
              {message}
            </li>
          );
        })}
      </ul>
    )
  );
};

export function isValidEmail(value) {
  return [
    {
      isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      // message: 'Should be valid email format',
    },
  ];
}

export function isValidPassword(value) {
  return [
    {
      isValid: value.length >= 8,
      message: "8 characters or more",
    },
    {
      isValid: value.length <= 64,
      message: "Password cannot exceed 64 characters",
    },
    {
      isValid: /(?=.*[a-z])(?=.*[A-Z]).*/.test(value),
      message: "Uppercase and lowercase letters",
    },
    {
      isValid: /\d+/.test(value),
      message: "At least 1 digit",
    },
  ];
}
