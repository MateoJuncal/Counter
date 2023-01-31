import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="NumberContainer">
        <p className="Number">0</p>
      </div>
      <div className="ButtonsContainer">
        <button className="StartButton" onClick={console.log("hola")}>
          Start
        </button>
        <button className="ResetButton">Reset</button>
      </div>
    </div>
  );
}

export default App;
