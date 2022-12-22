/* eslint-disable no-shadow */
import { useState } from 'react';

export const useValidationCheck = (validationCheckCallback) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);

    if (!validationCheckCallback(value)) {
      setIsValid(false);
    }

    if (validationCheckCallback(value)) {
      setIsValid(true);
    }
  };

  return [value, isValid, handleChange, setValue];
};
