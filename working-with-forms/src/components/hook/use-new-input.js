import { useState } from "react";

const useInputValidation = (validateInput) => {
  const [enterValue, setEnterValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enterValue);
  const hasError = !valueIsValid && isTouched;

  const inputOnchangeHandler = (event) => {
    setEnterValue(event.target.value);
  };

  const inputOnBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEnterValue("");
    setIsTouched(false);
  };

  return {
    value: enterValue,
    hasError,
    resetInput,
    valueIsValid,
    inputOnBlurHandler,
    inputOnchangeHandler,
  };
};

export default useInputValidation;
