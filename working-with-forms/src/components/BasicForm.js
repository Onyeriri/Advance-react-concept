import useInputValidation from "./hook/use-new-input";

const BasicForm = (props) => {
  // first name input validation
  const {
    value: firstName,
    resetInput: resetFirstName,
    valueIsValid: firstNameIsValid,
    inputOnBlurHandler: firstNameOnBlurHandler,
    inputOnchangeHandler: firstNameOnChangeHandler,
    hasError: firstNameHasError,
    inputValue,
  } = useInputValidation((value) => value.trim() !== "");

  console.log(inputValue, firstNameIsValid);

  // last name input validation
  const {
    value: lastName,
    resetInput: resetLastName,
    valueIsValid: lastNameIsValid,
    inputOnBlurHandler: lastNameOnBlurHandler,
    inputOnchangeHandler: lastNameOnChangeHandler,
    hasError: lastNameHasError,
  } = useInputValidation((value) => value.trim() !== "");

  // email input validation
  const {
    value: enteredEmail,
    resetInput: resetEmailInput,
    valueIsValid: enteredEmailIsValid,
    inputOnBlurHandler: emailOnBlurHandler,
    inputOnchangeHandler: emailOnChangeHandler,
    hasError: emailHasError,
  } = useInputValidation((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const formValues = {
      email: enteredEmail,
      firstName: firstName,
      lastName: lastName,
    };

    console.log(formValues);

    resetFirstName();
    resetLastName();
    resetEmailInput();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameOnChangeHandler}
            onBlur={firstNameOnBlurHandler}
          />
          {firstNameHasError && <p>Input cant be empty</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onBlur={lastNameOnBlurHandler}
            onChange={lastNameOnChangeHandler}
          />
          {lastNameHasError && <p>Input cant be empty</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onBlur={emailOnBlurHandler}
          onChange={emailOnChangeHandler}
        />
        {emailHasError && <p>Please enter a valid email address</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
