import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const userInput = useRef();
  const handleSubmission = (e) => {
    e.preventDefault();

    console.log(enteredValue);
    console.log(userInput.current.value);
    props.onUserInput(enteredValue);
    setEnteredValue('')
  }
  return (
    <form onSubmit={handleSubmission}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={userInput} value={enteredValue} onChange={(e) => setEnteredValue(e.target.value)} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
