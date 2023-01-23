import { useReducer } from "react";

const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      enterValue: action.value,
      isTouched: state.isTouched,
    };
  }

  if (action.type === "BLUR") {
    return {
      enterValue: state.enterValue,
      isTouched: true,
    };
  }

  if (action.type === "RESET_ENTERED_VALUE") {
    return {
      enterValue: "",
      isTouched: false,
    };
  }

  if (action.type === "RESET_ONBLUR") {
    return {
      enterValue: "",
      isTouched: false,
    };
  }

  return state;
};

const useInputValidation = (validateInput) => {
  // const [enterValue, setEnterValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const [inputValue, dispatchInputReducer] = useReducer(inputReducer, {
    enterValue: "",
    isTouched: false,
  });

  const valueIsValid = validateInput(inputValue.enterValue);
  const hasError = !valueIsValid && inputValue.isTouched;

  const inputOnchangeHandler = (event) => {
    // setEnterValue(event.target.value);
    dispatchInputReducer({ type: "CHANGE", value: event.target.value });
  };

  const inputOnBlurHandler = (event) => {
    // setIsTouched(true);
    dispatchInputReducer({ type: "BLUR", value: false });
  };

  const resetInput = () => {
    // setEnterValue("");
    // setIsTouched(false);
    dispatchInputReducer({ type: "RESET_ENTERED_VALUE", value: "" });
    dispatchInputReducer({ type: "RESET_ONBLUR", value: false });
  };

  return {
    value: inputValue.enterValue,
    hasError,
    resetInput,
    valueIsValid,
    inputOnBlurHandler,
    inputOnchangeHandler,
    inputValue,
  };
};

export default useInputValidation;
