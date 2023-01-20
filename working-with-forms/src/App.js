import SimpleInput from './components/SimpleInput';

function App() {

  const userInputHandler = (value) => {
    console.log(value);
  }
  return (
    <div className="app">
      <SimpleInput onUserInput={userInputHandler} />
    </div>
  );
}

export default App;
