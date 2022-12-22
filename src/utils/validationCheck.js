export const emailValidationCheck = (email) => {
  return email.includes('@');
};

export const passwordValidationCheck = (password) => {
  return password.length >= 8;
};

export const todoInputVlaueValidationCheck = (todoInputValue) => {
  return todoInputValue.length > 0;
};
