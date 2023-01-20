import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const handleSubmission = (e) => {
    e.preventDefault();

    console.log(enteredValue);
    props.onUserInput(enteredValue);
    setEnteredValue('')
  }
  return (
    <form onSubmit={handleSubmission}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredValue} onChange={(e) => setEnteredValue(e.target.value)} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
