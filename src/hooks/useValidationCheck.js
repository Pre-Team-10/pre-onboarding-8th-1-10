import { useCallback, useState } from 'react';

export const useValidationCheck = (validationCheckCallback) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);

    // 유효성 검사 결과가 false일 경우
    if (!validationCheckCallback(value)) {
      setIsValid(false);
    }

    // 유효성 검사 결과가 true일 경우
    if (validationCheckCallback(value)) {
      setIsValid(true);
    }
  }, []);

  return [value, isValid, handleChange, setValue];
};
