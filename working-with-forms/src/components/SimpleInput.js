import { useRef, useState } from "react";
import '../index.css';

const SimpleInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  const userInput = useRef();
  const handleSubmission = (e) => {
    e.preventDefault();

    if (!enteredValue.trim()) {
      setIsFormEmpty(!isFormEmpty);

      setTimeout(() => {
        setIsFormEmpty(false);
      }, 1000);

      return;
    }

    console.log(enteredValue);
    console.log(userInput.current.value);
    props.onUserInput(enteredValue);
    setEnteredValue('')
    // userInput.current.value = '';
  }
  return (
    <form onSubmit={handleSubmission}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          className={isFormEmpty ? 'error-text' : ''}
          type='text' id='name'
          ref={userInput} value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)} 
        />
        {isFormEmpty && <p>Fields cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
