import { useEffect, useState } from "react";
import '../index.css';

const SimpleInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const isEnteredValueValid = enteredValue.trim() !== '';
  const nameInputIsValid = !isEnteredValueValid && enteredNameTouched;

  // const userInput = useRef();

  let formIsValid = false;

  if (isEnteredValueValid) {
    formIsValid = true;
  }


  const handleUserInput = (e) => {
    setEnteredValue(e.target.value);
    
    // e.target.value.length < 6 ? setIsFormEmpty(true) : setIsFormEmpty(false);
  }

  const handEnteredInputBlur = () => {
    setEnteredNameTouched(!enteredNameTouched);
  }

  const handleSubmission = (e) => {
    e.preventDefault();

    if (!enteredValue) {
      setEnteredNameTouched(true)

      return;
    }

    // console.log(enteredValue);
    // console.log(userInput.current.value);
    // props.onUserInput(enteredValue);
    setEnteredValue('')
    // userInput.current.value = '';
  }
  return (
    <form onSubmit={handleSubmission}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          className={nameInputIsValid ? 'error-text' : ''}
          type='text' id='name'
          value={enteredValue}
          onChange={handleUserInput}
          onBlur={handEnteredInputBlur}
        />
        {nameInputIsValid && <p>Fields cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
