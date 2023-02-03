import "./App.css";
import "./components/Buttons.js";
import Button from "./components/Buttons.js";
import Number from "./components/Number.js";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <Number number={count} />
      <div className="ButtonsContainer">
        <Button text="Increment" classN="IncrementButton" doThis={increment} />
        <Button text="Reset" classN="ResetButton" doThis={reset} />
      </div>
    </div>
  );
}

export default App;
