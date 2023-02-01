import "./App.css";
import "./Buttons.js";
import Button from "./Buttons.js";

function App() {
  const handlerClick = () => {
    console.log("Hola");
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="NumberContainer">
        <p className="Number">0</p>
      </div>
      <div className="ButtonsContainer">
        <Button text="Start" classN="StartButton" doThis={handlerClick} />
        <Button text="Reset" classN="ResetButton" />
      </div>
    </div>
  );
}

export default App;
